import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTop5UsersWithHighestScores } from "@/app/actions";

import UserPosition from "@/components/UserPosition";

interface LeaderBoardProps {}

export default async function LeaderBoard({}: LeaderBoardProps) {
  const top5Scores = await getTop5UsersWithHighestScores();

  return (
    <div className="relative z-[2] w-[474px] rounded-[11px] bg-white p-[12px] max-[1110px]:w-full">
      <div className="flex flex-col gap-[6px]">
        {top5Scores.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-[12px] py-[18px]"
          >
            <div className="flex items-center gap-[19px]">
              <Avatar className="h-[32px] min-h-[32px] w-[32px] min-w-[32px]">
                <AvatarImage src="/user-icon.svg" className="object-cover" />
                <AvatarFallback>{item.wallet.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="h-full min-h-[25px] w-[1px] bg-[#040404]/40"></div>
              <span className="font-outfit text-[18px] font-normal text-[#040404]/40">
                {item.wallet.slice(0, 3) + "..." + item.wallet.slice(-3)}
              </span>
            </div>
            <div className="font-outfit text-[18px] font-bold leading-[23px] text-[#8A8586]">
              {item.score ?? 0} 
              <span className="text-[16px] font-normal">Point</span>
            </div>
          </div>
        ))}
      </div>
      <UserPosition />
    </div>
  );
}
