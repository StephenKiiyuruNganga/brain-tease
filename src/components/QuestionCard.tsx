interface Props {
  question: string
  choices: string[]
  onSelect: any
  userChoice: string
  questionNumber: number
  totalQuestions: number
}

const QuestionCard = ({
  question,
  choices,
  onSelect,
  userChoice,
  questionNumber,
  totalQuestions,
}: Props) => {
  return <div></div>
}

export default QuestionCard
