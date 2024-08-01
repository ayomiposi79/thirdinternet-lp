interface QuestionsLayoutProps {
  children: React.ReactNode;
}

export default function QuestionsLayout({ children }: QuestionsLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFF] pt-[58px] max-sm:pt-[20px]">
      {children}
    </div>
  );
}
