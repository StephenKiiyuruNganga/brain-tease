import { shuffleArray } from "./utils"

export interface RawQuestion {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface Question extends RawQuestion {
  options: string[]
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`
  const raw_data = await fetch(endpoint)
  const data = await raw_data.json()
  return data.results.map((question: RawQuestion) => ({
    ...question,
    options: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))
}
