"use client";
import { useContext, useEffect } from "react";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { QuestionsRes } from "@/types";
import { QuestionsCtx } from "@/context/QuestionsProvider";
import QuizQuestionSkeleton from "@/components//QuizQuestionSkeleton";

interface QuestionsFormProps {
  data: QuestionsRes;
}

export default function QuestionsForm({ data }: QuestionsFormProps) {
  const {
    currentQuestion,
    setCurrentQuestion,
    setUserAnswers,
    userAnswers,
    setCurrentQuestionsRes,
    setEndQuizModal,
  } = useContext(QuestionsCtx);

  useEffect(() => {
    setCurrentQuestionsRes(data);
  }, [data, setCurrentQuestionsRes]);

  const handleNextQuestion = () => {
    if (
      currentQuestion &&
      currentQuestion.questionCounter + 1 !== currentQuestion.questionLength
    ) {
      setCurrentQuestion((prev) =>
        prev
          ? {
              ...prev,
              questionCounter: prev.questionCounter + 1,
              questionData: data.data[prev.questionCounter + 1],
            }
          : null,
      );
    }
    if (
      currentQuestion &&
      currentQuestion.questionCounter + 1 === currentQuestion.questionLength
    ) {
      setEndQuizModal(true);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion && currentQuestion.questionCounter > 0) {
      setCurrentQuestion((prev) =>
        prev
          ? {
              ...prev,
              questionCounter: prev.questionCounter - 1,
              questionData: data.data[prev.questionCounter - 1],
            }
          : null,
      );
    }
  };

  return (
    <form>
      <div className="mx-auto flex w-full max-w-[598px] flex-col gap-1 rounded-[18px] bg-[#fefeff] px-[23px] py-[20px] shadow-quizCard">
        <div className="flex flex-col gap-[47px]">
          {currentQuestion ? (
            <QuizQuestion
              id={currentQuestion.questionData.id}
              option={currentQuestion.questionData.option}
              question={currentQuestion.questionData.question}
              questionNumber={currentQuestion.questionCounter + 1}
              value={
                userAnswers.answers.find(
                  ({ id }) => id === currentQuestion.questionData.id,
                )?.userAnswer ?? ""
              }
              setUserAnswers={setUserAnswers}
            />
          ) : (
            <QuizQuestionSkeleton />
          )}
        </div>
        <div className="ml-auto flex flex-wrap items-center justify-center gap-[13px]">
          <Button
            type="button"
            variant="outline"
            className="h-auto rounded-[30px] border-none bg-[#E8E9ED] px-[32px] py-[10px] font-outfit text-[14px] leading-[18px] text-[#3a3838]"
            onClick={handlePreviousQuestion}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-auto rounded-[30px] border-none bg-[#01BD82] px-[32px] py-[10px] font-outfit text-[14px] leading-[18px] text-white"
            onClick={() => {
              handleNextQuestion();
            }}
          >
            {currentQuestion
              ? currentQuestion.questionCounter + 1 ===
                currentQuestion.questionLength
                ? "Submit"
                : "Proceed"
              : "Proceed"}
          </Button>
        </div>
      </div>
    </form>
  );
}
