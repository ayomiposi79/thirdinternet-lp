"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePrivy } from "@privy-io/react-auth";
import { DbCtx } from "@/context/DbProvider";
import { useContext } from "react";

interface UserPositionProps {}

const UserPosition = ({}: UserPositionProps) => {
  const { authenticated } = usePrivy();
  const { dbUser } = useContext(DbCtx);

  return (
    <>
      {authenticated && dbUser ? (
        <>
          <div className="my-[6px] h-[0.5px] w-full bg-[#8E8787]/45"></div>
          <div className="flex flex-col gap-[3px]">
            <span className="mr-auto rounded-[26px] bg-[#FE3C77] px-[10px] py-[5px] font-outfit text-[14px] font-normal leading-[18px] text-white">
              {`Position ${dbUser.rank}/${dbUser.totalUsers}`}
            </span>
            <div className="flex items-center justify-between rounded-[45px] bg-[#F6F6FA] px-[12px] py-[18px]">
              <div className="flex items-center gap-[19px]">
                <Avatar className="h-[32px] min-h-[32px] w-[32px] min-w-[32px]">
                  <AvatarImage src="/user-icon.svg" className="object-cover" />
                  <AvatarFallback>{dbUser.wallet.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="h-full min-h-[25px] w-[1px] bg-[#434343]"></div>
                <span className="font-outfit text-[18px] font-normal text-[#434343]">
                  {dbUser.wallet.slice(0, 3) + "..." + dbUser.wallet.slice(-3)}
                </span>
              </div>
              <div className="font-outfit text-[18px] font-bold leading-[23px] text-[#434343]">
                {dbUser.score} 
                <span className="text-[16px] font-normal">Point</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserPosition;
