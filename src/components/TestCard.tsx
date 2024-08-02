"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { forwardRef, HTMLAttributes, useContext } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { addUserIfNotInDB } from "@/app/actions";
import { DbCtx } from "@/context/DbProvider";

interface TestCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const TestCard = forwardRef<HTMLDivElement, TestCardProps>(
  ({ name, className, ...props }, ref) => {
    const { authenticated } = usePrivy();
    const { dbUser, setDbUser } = useContext(DbCtx);
    const { login } = useLogin({
      onComplete: async (user) => {
        const userDetails = await addUserIfNotInDB({
          wallet: user.wallet?.address ?? "",
        });
        setDbUser(userDetails);
      },
    });
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "rounded-[13px] bg-[#FEFEFF] px-[10px] pb-[23px] pt-[10px] shadow-testCard backdrop-blur-[11.5px]",
          className,
        )}
        onClick={() => {
          if (!authenticated) {
            login();
          }
        }}
      >
        <Image
          alt="card-image"
          src="/card-image.png"
          width={237}
          height={136}
          className="mb-[20px] w-full rounded-[10px] object-cover object-center"
        />
        <div className="mb-[19px] flex flex-col gap-[4px]">
          <span className="font-mavenPro text-[18px] font-semibold capitalize leading-[21px] text-[#262626]">
            {name}
          </span>
          <span className="font-clashGrotesk text-[14px] font-medium leading-[18px] text-[#9a9999]">
            Attempt 40 questions from a pool of 1500 past questions
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Link href={authenticated ? `/quiz/${name}` : "#"}>
            <Button className="h-auto rounded-[30px] bg-[#049A6B] px-[32px] py-[10px] font-outfit text-[14px] font-normal leading-[18px] text-[#E5FDF5]">
              Start Quiz
            </Button>
          </Link>
          <div className="flex items-center gap-[6px] font-outfit text-[14px] font-normal leading-[18px] text-[#A9AAAC]">
            <Image alt="clock" src="/clock.svg" width={25} height={24} />
            30 mins
          </div>
        </div>
      </div>
    );
  },
);
TestCard.displayName = "TestCard";

export default TestCard;
