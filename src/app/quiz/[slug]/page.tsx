import TestNav from "@/components/TestNav";
import Timer from "@/components/Timer";
import QuestionsForm from "@/components/QuestionsForm";
import { getSubjectQuestions, getSubjects } from "@/app/actions";
interface QuizPageProps {
  params: {
    slug: string;
  };
}

export default async function QuizPage({ params: { slug } }: QuizPageProps) {
  const data = await getSubjectQuestions(slug);
  return (
    <>
      <TestNav className="mb-[20px]" alt={true} />
      <main className="container flex flex-col gap-[20px]">
        <Timer />
        <QuestionsForm data={data} />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const subjects = await getSubjects();

  return subjects.map((subject) => ({
    slug: subject,
  }));
}
