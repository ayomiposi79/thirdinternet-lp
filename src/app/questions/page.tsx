import Footer from "@/components/Footer";
import QuestionsListNav from "@/components/QuestionsListNav";
import TestNav from "@/components/TestNav";
import QuestionsList from "@/components/QuestionsList";
import { Suspense } from "react";
import QuestionListSkeleton from "@/components/QuestionListSkeleton";

interface QuestionsProps {}

export default async function Questions({}: QuestionsProps) {
  return (
    <>
      <TestNav className="mb-[39px]" alt={true} />
      <main className="container">
        {/* <QuestionsListNav /> */}
        <div className="mb-[150px] grid grid-cols-4 gap-[50px] max-xl:grid-cols-3 max-xl:gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
          <Suspense fallback={<QuestionListSkeleton />}>
            <QuestionsList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
