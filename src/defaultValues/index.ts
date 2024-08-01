import {
  CurrentQuestionProps,
  DbUserProps,
  QuestionsRes,
  UserAnswersProps,
} from "@/types";

export const defaultCurrentQuestion: CurrentQuestionProps = {
  questionCounter: 0,
  questionData: {
    id: 0,
    question: "",
    option: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    section: "",
    image: "",
    answer: "",
    solution: "",
    examtype: "",
    examyear: "",
  },
  questionLength: 0,
};

export const defaultUserAnswers: UserAnswersProps = {
  answers: [
    {
      id: 0,
      answer: "",
      userAnswer: "",
      isCorrect: false,
    },
  ],
  score: 0,
};

export const defaultQuestionsRes: QuestionsRes = {
  data: [
    {
      id: 0,
      question: "",
      option: {
        a: "",
        b: "",
        c: "",
        d: "",
      },
      section: "",
      image: "",
      answer: "",
      solution: "",
      examtype: "",
      examyear: "",
    },
  ],
  subjects: "",
  status: "",
  total: "",
};

export const defaultDbUser: DbUserProps | null = null;
