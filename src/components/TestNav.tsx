"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { forwardRef, HTMLAttributes, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrivy, useLogin, useLogout } from "@privy-io/react-auth";
import { addUserIfNotInDB } from "@/app/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { DbCtx } from "@/context/DbProvider";
import { useRouter } from "next/navigation";

interface TestNavProps extends HTMLAttributes<HTMLDivElement> {
  alt?: boolean;
}

const TestNav = forwardRef<HTMLDivElement, TestNavProps>(
  ({ className, alt = false, ...props }, ref) => {
    const router = useRouter();
    const [mobileNav, setMobileNav] = useState(false);
    const { dbUser, setDbUser } = useContext(DbCtx);
    const { login } = useLogin({
      onComplete: async (user) => {
        const userDetails = await addUserIfNotInDB({
          wallet: user.wallet?.address ?? "",
        });
        setDbUser(userDetails);
      },
    });
    const { logout } = useLogout({
      onSuccess: () => {
        setDbUser(null);
        router.refresh();
      },
    });

    const { authenticated, user } = usePrivy();
    return (
      <nav
        ref={ref}
        {...props}
        className={cn(
          `container relative mb-[62px] flex items-center justify-between rounded-[61px] ${alt ? "bg-white/[17%] shadow-quizCard" : "bg-[#36AE89] max-md:bg-[#049A6B]"} px-[20px] py-[7px]`,
          className,
        )}
      >
        <Button
          variant="ghost"
          className="hidden p-0 hover:bg-transparent max-md:flex"
          onClick={() => {
            setMobileNav((prev) => !prev);
          }}
        >
          {mobileNav ? (
            <Image
              alt={alt ? "alt-x-mobile" : "x-mobile"}
              src={alt ? "/alt-x-mobile.svg" : "/x-mobile.svg"}
              width={26}
              height={26}
            />
          ) : (
            <Image
              alt={alt ? "alt-hamburger-menu" : "hamburger-menu"}
              src={alt ? "/alt-hamburger-menu.svg" : "/hamburger-menu.svg"}
              width={26}
              height={26}
            />
          )}
        </Button>
        <Link href="https://www.thirdinternet.xyz">
          <Image
            alt={alt ? "alt-logo" : "full-logo"}
            src={alt ? "/alt-logo.svg" : "/full-logo.svg"}
            width={195}
            height={36}
            className="max-md:w-[133px]"
          />
        </Link>
        {dbUser && authenticated && (
          <div className={`${alt ? "border-gradient" : ""} max-md:hidden`}>
            <div
              className={`rounded-[12px] ${alt ? "bg-white text-[#FE3C77]" : "bg-[#049A6B] text-white"} border border-white/60 px-[37px] py-[16px] font-clashGrotesk text-[18px] font-semibold`}
            >
              {dbUser.score + " Points"}
            </div>
          </div>
        )}
        {authenticated ? (
          <>
            <div className="flex items-stretch gap-[12px] rounded-[34px] bg-white/5 px-[13px] py-[8px] max-md:hidden">
              <div className="flex items-center gap-[19px]">
                <Avatar className="h-[32px] min-h-[32px] w-[32px] min-w-[32px]">
                  <AvatarImage
                    src={alt ? "/alt-user-icon.svg" : "/user-icon.svg"}
                    className="object-cover"
                  />
                  <AvatarFallback>
                    {user?.wallet?.address.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`h-full max-h-[25px] w-[1px] ${alt ? "bg-[#0E1F38]" : "bg-white"} `}
                ></div>
                <span
                  className={`font-outfit text-[18px] font-normal ${alt ? "text-[#0E1F38]" : "text-white"} `}
                >
                  {user?.wallet?.address.slice(0, 3).toLowerCase() +
                    "..." +
                    user?.wallet?.address.slice(-3).toLowerCase()}
                </span>
              </div>
              <Button
                onClick={logout}
                variant="outline"
                className={`rounded-[30px] border-transparent ${alt ? "bg-[#0E1F38] text-white" : "bg-white text-[#2A2828]"} font-outfit text-[16px] font-normal`}
              >
                Log Out
              </Button>
            </div>
            <div className="hidden max-md:flex">
              <Popover>
                <PopoverTrigger asChild className="hidden max-lg:flex">
                  <Avatar className="min-h-32px min-w-[32px]">
                    <AvatarImage
                      src={alt ? "/alt-user-icon.svg" : "/user-icon.svg"}
                      className="object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-transparent">
                  <Button
                    onClick={logout}
                    variant="outline"
                    className={`rounded-[30px] border-transparent ${alt ? "bg-[#0E1F38] text-white" : "bg-white text-[#2A2828]"} font-outfit text-[16px] font-normal`}
                  >
                    Log Out
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          </>
        ) : (
          <div className="rounded-[34px] bg-white/5 px-[13px] py-[8px]">
            <Button
              onClick={() => {
                login();
              }}
              variant="outline"
              className={`rounded-[30px] border-transparent ${alt ? "bg-[#0E1F38] text-white" : "bg-white text-[#2A2828]"} font-outfit text-[16px] font-normal`}
            >
              Login
            </Button>
          </div>
        )}
        {mobileNav && (
          <div
            className={`absolute top-[70px] z-[3] -mx-[20px] hidden w-full items-center justify-center border-y ${alt ? "border-y-[#0E1F38] bg-white text-[#0E1F38]" : "border-y-white bg-[#36AE89] text-white"} py-[16px] font-clashGrotesk text-[16px] font-semibold leading-[20px] max-lg:flex`}
          >
            {dbUser ? (
              `${dbUser.score} Points`
            ) : (
              <Button
                onClick={() => {
                  login();
                }}
                variant="outline"
                className={`rounded-[30px] border-transparent ${alt ? "bg-[#0E1F38] text-white" : "bg-white text-[#2A2828]"} font-outfit text-[16px] font-normal`}
              >
                Login
              </Button>
            )}
          </div>
        )}
      </nav>
    );
  },
);
TestNav.displayName = "TestNav";
export default TestNav;
