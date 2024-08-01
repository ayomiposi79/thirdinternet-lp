import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestNav from "@/components/TestNav";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import QuestionsMarquee from "@/components/QuestionsMarquee";
import LeaderBoard from "@/components/LeaderBoard";
import Link from "next/link";
import TestCardSkeleton from "@/components/TestCardSkeleton";

interface BaseTestProps {}

export default async function BaseTest({}: BaseTestProps) {
  return (
    <>
      <section className="rounded-b-[24px] bg-[#049A6B] pt-[56px] max-sm:pt-[20px]">
        <TestNav />
        <div className="container grid grid-cols-2 pb-[40px] max-lg:grid-cols-1 max-lg:pb-[74px] max-lg:text-center">
          <div className="flex flex-col max-lg:items-center">
            <span className="font-clashGrotesk text-[24px] font-medium leading-[30px] text-white">
              Get Onboarded by taking
            </span>
            <h1 className="mb-[14px] font-clashGrotesk text-[64px] font-medium leading-[79px] text-white max-lg:max-w-[339px] max-lg:text-[52px] max-lg:leading-[43px]">
              Onchain Based Test
            </h1>
            <div className="mb-[87px] flex items-center gap-4 max-lg:mb-0 max-lg:hidden">
              <Link href="/questions">
                <Button
                  variant="outline"
                  className="h-auto rounded-[30px] border-none bg-[#fec726] px-[36px] py-[13px] font-outfit text-[16px] font-normal leading-[20px] text-[#222020]"
                >
                  Take Test
                </Button>
              </Link>
              <Link href="#leader-board">
                <Button
                  variant="outline"
                  className="h-auto rounded-[30px] border-none bg-[#E8E9ED] px-[36px] py-[13px] font-outfit text-[16px] font-normal leading-[20px] text-[#1F1E1E]"
                >
                  Check leaderboad
                </Button>
              </Link>
            </div>
            <div className="flex max-lg:hidden">
              <div className="relative top-[25px] z-[3] flex w-[137px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
                <span className="font-outfit text-[30px] font-semibold leading-[38px] text-white">
                  2k+
                </span>
                <span className="font-clashGrotesk text-[16px] font-medium leading-[20px] text-white">
                  Questions
                </span>
              </div>
              <div className="relative -left-[10px] flex w-[160px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
                <span className="font-outfit text-[30px] font-semibold leading-[38px] text-white">
                  300+
                </span>
                <span className="font-clashGrotesk text-[16px] font-medium leading-[20px] text-white">
                  Web3 Young star
                </span>
              </div>
              <div className="relative -left-[20px] top-[25px] flex w-[137px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
                <span className="font-outfit text-[30px] font-semibold leading-[38px] text-white">
                  ETH
                </span>
                <span className="font-clashGrotesk text-[16px] font-medium leading-[20px] text-white">
                  Pool for reward
                </span>
              </div>
            </div>
          </div>
          <Image
            alt="hero-image.svg"
            src="/hero-image.svg"
            width={625}
            height={466}
            className="max-lg:mx-auto"
          />
          <div className="mx-auto mb-[64px] hidden flex-wrap items-center gap-[10px] max-lg:flex max-sm:justify-center">
            <Link href="/questions">
              <Button
                variant="outline"
                className="h-auto rounded-[30px] border-none bg-[#fec726] px-[36px] py-[13px] font-outfit text-[16px] font-normal leading-[20px] text-[#222020]"
              >
                Take Test
              </Button>
            </Link>
            <Link href="#leader-board">
              <Button
                variant="outline"
                className="h-auto rounded-[30px] border-none bg-[#E8E9ED] px-[36px] py-[13px] font-outfit text-[16px] font-normal leading-[20px] text-[#1F1E1E]"
              >
                Check leaderboad
              </Button>
            </Link>
          </div>
          <div className="relative mx-auto hidden max-lg:flex">
            <div className="relative -left-[16%] top-[50%] z-[1] flex w-[107px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
              <span className="font-outfit text-[24px] font-semibold leading-[30px] text-white">
                2k+
              </span>
              <span className="font-clashGrotesk text-[12px] font-medium leading-[15px] text-white">
                Questions
              </span>
            </div>
            <div className="absolute right-[22%] z-[2] flex w-[126px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
              <span className="font-outfit text-[24px] font-semibold leading-[30px] text-white">
                300+
              </span>
              <span className="font-clashGrotesk text-[12px] font-medium leading-[15px] text-white">
                Web3 Young star
              </span>
            </div>
            <div className="relative -right-[20%] top-[45%] flex w-[113px] flex-col items-center rounded-[12px] bg-white/20 py-[12px] shadow-heroCard backdrop-blur-[10px]">
              <span className="font-outfit text-[24px] font-semibold leading-[30px] text-white">
                ETH
              </span>
              <span className="font-clashGrotesk text-[12px] font-medium leading-[15px] text-white">
                Pool for reward
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container mb-[70px] pt-[153px] max-[1110px]:pt-[26px]"
        id="leader-board"
      >
        <div className="flex gap-[25px] max-[1110px]:flex-col max-[1110px]:gap-[38px]">
          <h2 className="mb-[36px] hidden justify-center text-center font-clashGrotesk text-[43px] font-semibold leading-[53px] text-[#0E1F38] max-[1110px]:flex">
            Leaderboard
          </h2>
          <div className="border-gradient relative mb-auto">
            <Image
              alt="trophy"
              src="/trophy.svg"
              width={299}
              height={406}
              className="absolute -left-[35%] -top-[25%] max-[1110px]:-left-[7%] max-[1110px]:-top-[10%] max-[1110px]:w-[146px]"
            />
            <Suspense
              fallback={
                <div className="relative z-[2] w-[474px] rounded-[11px] bg-white p-[12px] max-[1110px]:w-full">
                  <div className="flex flex-col gap-[6px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-[12px] py-[18px]"
                      >
                        <div className="flex flex-1 items-center gap-[19px]">
                          <Skeleton className="h-[32px] min-h-[32px] w-[32px] min-w-[32px] rounded-full" />
                          <div className="h-full min-h-[25px] w-[1px] bg-[#040404]/40"></div>
                          <Skeleton className="h-[20px] w-[60%]" />
                        </div>
                        <div className="flex-1 font-outfit text-[18px] font-bold leading-[23px] text-[#8A8586]">
                          <Skeleton className="ml-auto h-[20px] w-[30%]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            >
              <LeaderBoard />
            </Suspense>
          </div>
          <div className="flex flex-col gap-[22px]">
            <h2 className="font-clashGrotesk text-[90px] font-semibold leading-[111px] text-[#0E1F38] max-[1110px]:hidden">
              Leaderboard
            </h2>
            <div className="flex max-w-[549px] flex-col gap-[31px] rounded-[18px] bg-white px-[30px] py-[20px] max-[1110px]:max-w-full">
              <span className="font-outfit text-[18px] leading-[33px] text-[#2D2929] max-[1110px]:text-[14px] max-[1110px]:leading-[22px]">
                Climb the ranks and showcase your expertise! Take our online
                tests, earn points, and see your name rise on the leaderboard.
                Compete with peers, unlock achievements, and gain recognition in
                the ThirdInternet community
              </span>
              <Link href="/questions" className="mr-auto">
                <Button
                  variant="outline"
                  className="mr-auto h-auto rounded-[30px] border-none bg-[#049A6B] px-[27px] py-[13px] font-outfit text-[16px] font-normal text-white"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[87px]">
        <Suspense
          fallback={
            <div className="flex items-center overflow-x-clip">
              {Array.from({ length: 20 }).map((_, index) => {
                return <TestCardSkeleton key={index} />;
              })}
            </div>
          }
        >
          <QuestionsMarquee />
        </Suspense>
      </section>
      <Footer />
    </>
  );
}
