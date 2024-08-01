import { Skeleton } from "@/components/ui/skeleton";

interface QuizQuestionSkeletonProps {}

export default function QuizQuestionSkeleton({}: QuizQuestionSkeletonProps) {
  return (
    <div className="flex flex-col gap-[18px] font-outfit text-[14px] font-medium leading-[18px] text-[#665D5D]">
      <Skeleton className="h-[18px] w-[40%]" />
      <div className="flex flex-col gap-[9px]">
        <div className="flex items-center gap-[22px]">
          <Skeleton className="h-[23px] min-h-[23px] w-[23px] min-w-[23px] rounded-full" />
          <Skeleton className="h-[18px] w-[40%]" />
        </div>
        <div className="flex items-center gap-[22px]">
          <Skeleton className="h-[23px] min-h-[23px] w-[23px] min-w-[23px] rounded-full" />
          <Skeleton className="h-[18px] w-[40%]" />
        </div>
        <div className="flex items-center gap-[22px]">
          <Skeleton className="h-[23px] min-h-[23px] w-[23px] min-w-[23px] rounded-full" />
          <Skeleton className="h-[18px] w-[40%]" />
        </div>
        <div className="flex items-center gap-[22px]">
          <Skeleton className="h-[23px] min-h-[23px] w-[23px] min-w-[23px] rounded-full" />
          <Skeleton className="h-[18px] w-[40%]" />
        </div>
      </div>
    </div>
  );
}
