import { Skeleton } from "@/components/ui/skeleton";
interface TestCardSkeletonProps {}

export default function TestCardSkeleton({}: TestCardSkeletonProps) {
  return (
    <div className="ml-[10.4px] h-[306px] min-w-[257px] rounded-[13px] bg-[#FEFEFF] px-[10px] pb-[23px] pt-[10px] shadow-testCard backdrop-blur-[11.5px]">
      <Skeleton className="full mb-[20px] h-[135px] rounded-[10px]" />
      <Skeleton className="mb-[4px] h-[21px] w-[40%]" />
      <Skeleton className="mb-[19px] h-[21px] w-[60%]" />
    </div>
  );
}
