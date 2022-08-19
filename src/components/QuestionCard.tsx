interface Props {
  question: string
  options: string[]
  onSelectAnswer: any
  userAnswer: any
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
          <div>
            <button disabled={userAnswer} onClick={onSelectAnswer}>
              <span dangerouslySetInnerHTML={{ __html: option }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
