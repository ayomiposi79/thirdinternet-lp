import { getSubjects } from "@/app/actions";
import TestCard from "@/components/TestCard";
interface QuestionsListProps {}

export default async function QuestionsList({}: QuestionsListProps) {
  const structuredData = await getSubjects();
  return (
    <>
      {structuredData.map((subjectName, index) => (
        <TestCard
          key={index}
          name={subjectName}
          // className="ml-[10.4px] w-[257px]"
        />
      ))}
    </>
  );
}
