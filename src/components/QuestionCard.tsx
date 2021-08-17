import React from 'react'

type PropsData= {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
    <div>
      <p className='number'> 
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}></p>
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}}/>
            </button>
          </div>
        )
        )}
      </div>
    </div>
  )


export default QuestionCard