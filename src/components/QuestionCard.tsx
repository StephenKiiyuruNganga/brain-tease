import { Answer } from "../App"

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
    <div>
      <p className="number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {options.map((option) => (
          <div key={option}>
            <button
              disabled={!!userAnswer}
              value={option}
              onClick={() => onSelectAnswer(option)}
            >
              <span dangerouslySetInnerHTML={{ __html: option }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
