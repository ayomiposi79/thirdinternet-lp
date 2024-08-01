import TestCard from "@/components/TestCard";
import Marquee from "@/components/Marquee";
import { getSubjects } from "@/app/actions";
interface QuestionsMarqueeProps {}

export default async function QuestionsMarquee({}: QuestionsMarqueeProps) {
  const structuredData = await getSubjects();

  return (
    <Marquee>
      {structuredData.map((subjectName, index) => (
        <TestCard
          key={index}
          name={subjectName}
          className="ml-[10.4px] w-[257px]"
        />
      ))}
    </Marquee>
  );
}
