import React, { useEffect, useState } from "react"
import { Difficulty, fetchQuestions, Questions } from "./API"
import QuestionCard from "./components/QuestionCard"
import { GlobalStyle, Wrapper } from "./App.styles"

const TOTAL_QUESTIONS = 10

export interface Answer {
  question: string
  answer: string
  isCorrect: boolean
  correctAnswer: string
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState<Questions[]>([])
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Answer[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setIsLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    )
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setCurrentQuestionNumber(0)
    setIsLoading(false)
    console.log("New questions =>", newQuestions)
  }

  const checkAnswer = (userAnswer: string) => {
    if (!gameOver) {
      const isCorrect =
        questions[currentQuestionNumber].correct_answer === userAnswer
      if (isCorrect) setScore((prevScore) => prevScore + 1)
      const answerObject = {
        question: questions[currentQuestionNumber].question,
        correctAnswer: questions[currentQuestionNumber].correct_answer,
        answer: userAnswer,
        isCorrect,
      }
      setUserAnswers((prevAnswers) => [...prevAnswers, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestionNumber = currentQuestionNumber + 1

    if (nextQuestionNumber !== TOTAL_QUESTIONS) {
      setCurrentQuestionNumber(nextQuestionNumber)
    } else {
      setGameOver(true)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Brain Tease</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}

        {!gameOver && <p className="score">Score: {score}</p>}
        {isLoading && <p>Loading Questions...</p>}
        {!isLoading && !gameOver ? (
          <QuestionCard
            questionNumber={currentQuestionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[currentQuestionNumber].question}
            options={questions[currentQuestionNumber].options}
            userAnswer={
              userAnswers ? userAnswers[currentQuestionNumber] : undefined
            }
            onSelectAnswer={checkAnswer}
          />
        ) : null}
        {!gameOver &&
        !isLoading &&
        userAnswers.length === currentQuestionNumber + 1 &&
        currentQuestionNumber !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  )
}

export default App
