import React from 'react'
import {AnswerObject} from '../App'
import {Wrap} from '../App.styles'

type PropsData= {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
}

//* define functional component
/*
const QuestionCard: React.FC<PropsData> = ({
  question, 
  answer, 
  callback, 
  userAnswer, 
  questionNumber,
  totalNumber}) => {

  return (
    <div>
      halo
    </div>
  )
}
*/

const QuestionCard: React.FC<PropsData> = ({
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNumber,
  totalQuestion}) => (
    <Wrap>
      <p className='number'> 
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}}/>
            </button>
          </div>
        )
        )}
      </div>
    </Wrap>
  )


export default QuestionCard