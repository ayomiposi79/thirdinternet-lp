export interface QuestionsCtxProps {
  currentQuestion: CurrentQuestionProps | null;
  setCurrentQuestion: React.Dispatch<
    React.SetStateAction<CurrentQuestionProps | null>
  >;
  userAnswers: UserAnswersProps;
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswersProps>>;
  currentQuestionsRes: QuestionsRes;
  setCurrentQuestionsRes: React.Dispatch<React.SetStateAction<QuestionsRes>>;
  resetForm: () => void;
  setEndQuizModal: React.Dispatch<React.SetStateAction<boolean>>;
  endQuizModal: boolean;
}

export interface DbCtxProps {
  dbUser: DbUserProps | null;
  setDbUser: React.Dispatch<React.SetStateAction<DbUserProps | null>>;
}

export interface CurrentQuestionProps {
  questionCounter: number;
  questionData: {
    id: number;
    question: string;
    option: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    section: string;
    image: string;
    answer: string;
    solution: string;
    examtype: string;
    examyear: string;
  };
  questionLength: number;
}

export interface UserAnswersProps {
  answers: {
    id: number;
    answer: string;
    userAnswer: string;
    isCorrect: boolean;
  }[];
  score: number;
}

export interface QuestionsRes {
  subjects: string;
  status: string;
  total: string;
  data: {
    id: number;
    question: string;
    option: {
      a: string;
      b: string;
      c: string;
      d: string;
    };
    section: string;
    image: string;
    answer: string;
    solution: string;
    examtype: string;
    examyear: string;
  }[];
}

export interface DbUserProps {
  id: number;
  wallet: string;
  score: number | null;
  createdAt: Date;
  updatedAt: Date;
  rank: number;
  totalUsers: number;
}
