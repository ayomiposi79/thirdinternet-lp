import TestCardSkeleton from "@/components/TestCardSkeleton";

interface QuestionListSkeletonProps {}

export default function QuestionListSkeleton({}: QuestionListSkeletonProps) {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <TestCardSkeleton
          key={index}
          // className="ml-[10.4px] w-[257px]"
        />
      ))}
    </>
  );
}
