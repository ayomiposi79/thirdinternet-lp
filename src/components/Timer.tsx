"use client";
import Image from "next/image";
import { useTimer } from "react-timer-hook";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import { QuestionsCtx } from "@/context/QuestionsProvider";
import { useEffect } from "react";
import Link from "next/link";
import { updateScore } from "@/app/actions";
import { DbCtx } from "@/context/DbProvider";
import { usePrivy } from "@privy-io/react-auth";
import { padWithZero } from "@/lib/utils";

interface TimerProps {}

export default function Timer({}: TimerProps) {
  const { dbUser, setDbUser } = useContext(DbCtx);
  const { authenticated } = usePrivy();
  const { userAnswers, resetForm, endQuizModal, setEndQuizModal } =
    useContext(QuestionsCtx);
  const [resultModal, setResultModal] = useState(false);
  const [rewardModal, setRewardModal] = useState(false);
  const [isPass, setIsPass] = useState(false);

  useEffect(() => {
    const pass = (userAnswers.score / userAnswers.answers.length) * 100 >= 1;
    setIsPass(pass);
  }, [userAnswers.answers.length, userAnswers.score]);

  const thirtyMins = new Date();
  thirtyMins.setSeconds(thirtyMins.getSeconds() + 1800);
  const { hours, minutes, seconds, start, pause, restart } = useTimer({
    expiryTimestamp: thirtyMins,
    autoStart: false,
    onExpire: async () => {
      await endQuiz();
    },
  });

  async function endQuiz() {
    setResultModal(true);
    if (authenticated && dbUser) {
      const user = await updateScore({
        wallet: dbUser.wallet,
        score: userAnswers.score,
      });
      setDbUser(user);
    }
  }

  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-[10px] rounded-[42px] bg-[#EFF0F3] py-[10px] pl-[31px] pr-[12px] font-sairaStencilOne text-[24px] leading-[38px] text-[#686666] max-sm:px-[12px]">
      <span className="flex w-[131px] items-center gap-[6px]">
        {padWithZero(hours)}
        <Image alt="timeColumn" src="/timeColumn.svg" width={6} height={14} />
        {padWithZero(minutes)}
        <Image alt="timeColumn" src="/timeColumn.svg" width={6} height={14} />
        {padWithZero(seconds)}
      </span>
      <Dialog open={endQuizModal} onOpenChange={setEndQuizModal}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="h-auto rounded-[30px] border-none bg-[#0e1f38] px-[32px] py-[10px] font-clashGrotesk text-[14px] font-medium leading-[18px] text-white"
          >
            End Quiz
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-[31px] p-[31.76px]">
          <span className="text-center font-outfit text-[16px] font-normal leading-[20px] text-[#545151]">
            Are you sure you want to end quiz?. Your work will be submitted and
            you will be graded according to your submissions
          </span>

          <div className="flex flex-col gap-[24px]">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#01BD82] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-white"
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={async () => {
                  await endQuiz();
                  // setResultModal(true);
                  // pause();
                }}
                variant="outline"
                className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#E8E9ED] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-[#3A3838]"
              >
                End Quiz
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <AlertDialog defaultOpen>
        <AlertDialogContent className="flex flex-col rounded-[15px] bg-[#FEFEFF] p-[31.76px]">
          <Image
            alt="quiz-clock"
            src="/quiz-clock.svg"
            width={122}
            height={123}
            className="mx-auto"
          />
          <p className="text-center font-outfit text-[16px] font-normal leading-[20px] text-[#545151]">
            This quiz lasts for 30 minutes only. You can submit anytime before
            the time is up. If you don&apos;t submit on time, the system will
            submit for you.
          </p>
          <AlertDialogAction
            asChild
            onClick={() => {
              start();
            }}
          >
            <Button
              variant="outline"
              className="mx-auto h-auto rounded-[30px] bg-[#01BD82] px-[90px] py-[16px] font-outfit text-[16px] font-semibold leading-[20px] text-white hover:bg-[#E8E9ED] hover:text-[#3A3838]"
            >
              Start Quiz
            </Button>
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={resultModal} onOpenChange={setResultModal}>
        <AlertDialogContent className="flex flex-col items-center gap-4 rounded-[15px] p-[31.76px]">
          <Image
            alt="thumbs-up"
            src="/thumbs-up.svg"
            width={206}
            height={123}
          />
          <div className="flex flex-col items-center gap-1 font-outfit text-[#404040]">
            <span className="text-[24px] font-normal leading-[30px]">
              Good work, you scored
            </span>
            <span className="text-[36px] font-bold leading-[45px]">
              {(userAnswers.score / userAnswers.answers.length) * 100 + "%"}
            </span>
          </div>
          {isPass ? (
            <div className="flex flex-col gap-[31px]">
              <span className="max-w-[374px] text-center font-outfit text-[16px] font-normal leading-[20px] text-[#404040]">
                Now at the leader board, You are eligible for the reward
              </span>
              <Button
                onClick={() => {
                  setResultModal(false);
                  setRewardModal(true);
                }}
                variant="outline"
                className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#01BD82] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-white"
              >
                Claim reward
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => {
                  restart(thirtyMins);
                  setResultModal(false);
                  resetForm();
                }}
                variant="outline"
                className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#01BD82] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-white"
              >
                Try again
              </Button>
              <Link href="/base-test">
                <Button
                  onClick={() => {
                    setResultModal(false);
                  }}
                  variant="outline"
                  className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#E8E9ED] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-[#3A3838]"
                >
                  Return home
                </Button>
              </Link>
            </div>
          )}
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={rewardModal} onOpenChange={setRewardModal}>
        <AlertDialogContent className="flex flex-col rounded-[15px] p-[31.76px]">
          <Image
            alt="coins"
            src="/coins.svg"
            width={132}
            height={123}
            className="mx-auto mb-[18px]"
          />
          <span className="mb-[31px] text-center font-outfit text-[16px] font-normal leading-[20px] text-[#545151]">
            Receive a reward if you make the leaderboard
          </span>
          <AlertDialogAction asChild>
            <Link
              href="/base-test"
              className="bg-transparent hover:bg-transparent"
            >
              <Button
                variant="outline"
                className="mx-auto h-auto w-[243px] rounded-[30px] border-none bg-[#E8E9ED] px-[90px] py-[16px] font-outfit text-[16px] font-normal leading-[20px] text-[#3A3838]"
              >
                Got It
              </Button>
            </Link>
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
