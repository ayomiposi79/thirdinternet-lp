import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserAnswersProps } from "@/types";

interface QuizQuestionProps {
  questionNumber: number;
  question: string;
  option: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  id: number;
  value: string;
  setUserAnswers: React.Dispatch<React.SetStateAction<UserAnswersProps>>;
}

export default function QuizQuestion({
  option,
  question,
  questionNumber,
  id,
  value,
  setUserAnswers,
}: QuizQuestionProps) {
  return (
    <div className="flex flex-col gap-[18px] font-outfit text-[14px] font-medium leading-[18px] text-[#665D5D]">
      <span>{`${questionNumber}. ${question}`}</span>
      <RadioGroup
        defaultValue=""
        value={value}
        onValueChange={(selectedValue) => {
          setUserAnswers((prev) => {
            const dummyAnswers = prev.answers.map(
              ({ id: answerId, answer, userAnswer, isCorrect }) => {
                return {
                  id: answerId,
                  answer,
                  userAnswer: answerId === id ? selectedValue : userAnswer,
                  isCorrect:
                    answerId === id ? answer === selectedValue : isCorrect,
                };
              },
            );
            return {
              score: dummyAnswers.filter(({ isCorrect }) => isCorrect).length,
              answers: dummyAnswers,
            };
          });
        }}
        className="flex flex-col gap-[9px]"
      >
        <div className="flex items-center gap-[22px]">
          <RadioGroupItem value={"a"} id={id.toString() + "a"} />
          <Label htmlFor={id.toString() + "a"}>{`a. ${option.a}`}</Label>
        </div>
        <div className="flex items-center gap-[22px]">
          <RadioGroupItem value={"b"} id={id.toString() + "b"} />
          <Label htmlFor={id.toString() + "b"}>{`b. ${option.b}`}</Label>
        </div>
        <div className="flex items-center gap-[22px]">
          <RadioGroupItem value={"c"} id={id.toString() + "c"} />
          <Label htmlFor={id.toString() + "c"}>{`c. ${option.c}`}</Label>
        </div>
        <div className="flex items-center gap-[22px]">
          <RadioGroupItem value={"d"} id={id.toString() + "d"} />
          <Label htmlFor={id.toString() + "d"}>{`d. ${option.d}`}</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
