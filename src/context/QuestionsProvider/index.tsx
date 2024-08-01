"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  defaultCurrentQuestion,
  defaultQuestionsRes,
  defaultUserAnswers,
} from "../../defaultValues";
import {
  CurrentQuestionProps,
  QuestionsCtxProps,
  QuestionsRes,
  UserAnswersProps,
} from "../../types";

export const QuestionsCtx = createContext<QuestionsCtxProps>({
  currentQuestion: null,
  setCurrentQuestion: () => {},
  userAnswers: defaultUserAnswers,
  setUserAnswers: () => {},
  currentQuestionsRes: defaultQuestionsRes,
  setCurrentQuestionsRes: () => {},
  resetForm: () => {},
  endQuizModal: false,
  setEndQuizModal: () => {},
});

interface QuestionsProviderProps {
  children: React.ReactNode;
}

export default function QuestionsProvider({
  children,
}: QuestionsProviderProps) {
  const [endQuizModal, setEndQuizModal] = useState(false);
  const [currentQuestionsRes, setCurrentQuestionsRes] =
    useState<QuestionsRes>(defaultQuestionsRes);
  const [currentQuestion, setCurrentQuestion] =
    useState<CurrentQuestionProps | null>(null);
  const [userAnswers, setUserAnswers] =
    useState<UserAnswersProps>(defaultUserAnswers);

  useEffect(() => {
    setCurrentQuestion({
      questionCounter: 0,
      questionData: currentQuestionsRes.data[0],
      questionLength: currentQuestionsRes.data.length,
    });
  }, [currentQuestionsRes.data, setCurrentQuestion]);

  useEffect(() => {
    setUserAnswers((prev) => ({
      ...prev,
      answers: Array.from(currentQuestionsRes.data).map(({ id, answer }) => ({
        id,
        answer,
        userAnswer: "",
        isCorrect: false,
      })),
    }));
  }, [currentQuestionsRes.data, setUserAnswers]);

  const resetForm = () => {
    setCurrentQuestion({
      questionCounter: 0,
      questionData: currentQuestionsRes.data[0],
      questionLength: currentQuestionsRes.data.length,
    });
    setUserAnswers({
      score: 0,
      answers: Array.from(currentQuestionsRes.data).map(({ id, answer }) => ({
        id,
        answer,
        userAnswer: "",
        isCorrect: false,
      })),
    });
  };

  return (
    <QuestionsCtx.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setUserAnswers,
        currentQuestionsRes,
        setCurrentQuestionsRes,
        resetForm,
        endQuizModal,
        setEndQuizModal,
      }}
    >
      {children}
    </QuestionsCtx.Provider>
  );
}
