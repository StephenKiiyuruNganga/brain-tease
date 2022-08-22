import { Answer } from "../App"
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles"

interface Props {
  question: string
  options: string[]
  onSelectAnswer: (userAnswer: string) => void
  userAnswer: Answer | undefined
  questionNumber: number
  totalQuestions: number
}

const QuestionCard = ({
  question,
  options,
  onSelectAnswer,
  userAnswer,
  questionNumber,
  totalQuestions,
}: Props) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {options.map((option) => (
          <ButtonWrapper
            key={option}
            correct={userAnswer?.correctAnswer === option}
            userClicked={userAnswer?.answer === option}
          >
            <button
              disabled={!!userAnswer}
              value={option}
              onClick={() => onSelectAnswer(option)}
            >
              <span dangerouslySetInnerHTML={{ __html: option }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard
