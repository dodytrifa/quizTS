//* interaction with API
import { randomArray } from "./utils"


export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question &  {answers: string[]}

export enum Difficulty {
  EASY ='easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuest = async (amount: number, level: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`
  const data = await(await fetch(endpoint)).json()
  //*ngemap object
  return data.results.map((question: Question) => ({
    ...question, 
    answers: randomArray([
      ...question.incorrect_answers, 
      question.correct_answer
    ])
    }))
  
};