import QuestionsProvider from "@/context/QuestionsProvider";
interface QuizLayoutProps {
  children: React.ReactNode;
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <QuestionsProvider>
      <div className="min-h-screen bg-[#F9FAFF] pt-[58px] max-sm:pt-[20px]">
        {children}
      </div>
    </QuestionsProvider>
  );
}
