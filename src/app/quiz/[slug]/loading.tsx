import QuizQuestionSkeleton from "@/components/QuizQuestionSkeleton";
import TestNav from "@/components/TestNav";
import { Button } from "@/components/ui/button";
import { padWithZero } from "@/lib/utils";
import Image from "next/image";
interface QuizLoadingProps {}

export default function QuizLoading({}: QuizLoadingProps) {
  return (
    <>
      <TestNav className="mb-[20px]" alt={true} />
      <main className="container flex flex-col gap-[20px]">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-[10px] rounded-[42px] bg-[#EFF0F3] py-[10px] pl-[31px] pr-[12px] font-sairaStencilOne text-[24px] leading-[38px] text-[#686666]">
          <span className="flex w-[131px] items-center gap-[6px]">
            {padWithZero(30)}
            <Image
              alt="timeColumn"
              src="/timeColumn.svg"
              width={6}
              height={14}
            />
            {padWithZero(0)}
            <Image
              alt="timeColumn"
              src="/timeColumn.svg"
              width={6}
              height={14}
            />
            {padWithZero(0)}
          </span>
          <Button
            variant="outline"
            className="h-auto rounded-[30px] border-none bg-[#0e1f38] px-[32px] py-[10px] font-clashGrotesk text-[14px] font-medium leading-[18px] text-white"
          >
            End Quiz
          </Button>
        </div>
        <div>
          <div className="mx-auto flex w-full max-w-[598px] flex-col gap-1 rounded-[18px] bg-[#fefeff] px-[23px] py-[20px] shadow-quizCard">
            <div className="flex flex-col gap-[47px]">
              <QuizQuestionSkeleton />
            </div>
            <div className="ml-auto flex items-center gap-[13px]">
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-[30px] border-none bg-[#E8E9ED] px-[32px] py-[10px] font-outfit text-[14px] leading-[18px] text-[#3a3838]"
              >
                Previous
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-[30px] border-none bg-[#01BD82] px-[32px] py-[10px] font-outfit text-[14px] leading-[18px] text-white"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
