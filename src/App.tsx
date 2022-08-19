import React, { useEffect, useState } from "react"
import { Difficulty, fetchQuestions } from "./API"
import QuestionCard from "./components/QuestionCard"

const TOTAL_QUESTIONS = 10

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  //load questions

  console.log(
    "modified questions",
    fetchQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM)
  )

  const startTrivia = async () => {}

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}

  return (
    <div className="App">
      <h1>Brain Tease</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNumber={currentQuestionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[currentQuestionNumber].question}
        options={questions[currentQuestionNumber].options}
        userAnswer={
          userAnswers ? userAnswers[currentQuestionNumber] : undefined
        }
        onSelectAnswer={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
