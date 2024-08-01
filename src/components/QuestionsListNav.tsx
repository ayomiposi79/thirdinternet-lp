"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface QuestionsListNavProps {}

export default function QuestionsListNav({}: QuestionsListNavProps) {
  const [active, setActive] = useState({
    jamb: true,
    waec: false,
    neco: false,
  });
  return (
    <div className="mb-[22px] flex items-center justify-center gap-[42px]">
      <Button
        variant="outline"
        className={`h-auto rounded-[30px] border-none ${active.jamb ? "bg-[#FEC726]" : "bg-transparent"} px-[32px] py-[10px] font-clashGrotesk text-[14px] font-medium leading-[18px] text-[#353333]`}
      >
        JAMB
      </Button>
      <Button
        variant="outline"
        className={`h-auto rounded-[30px] border-none ${active.waec ? "bg-[#FEC726]" : "bg-transparent"} px-[32px] py-[10px] font-clashGrotesk text-[14px] font-medium leading-[18px] text-[#353333]`}
      >
        WAEC
      </Button>
      <Button
        variant="outline"
        className={`h-auto rounded-[30px] border-none ${active.neco ? "bg-[#FEC726]" : "bg-transparent"} px-[32px] py-[10px] font-clashGrotesk text-[14px] font-medium leading-[18px] text-[#353333]`}
      >
        NECO
      </Button>
    </div>
  );
}
