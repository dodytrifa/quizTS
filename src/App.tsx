import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'
import { fetchQuest, Difficulty } from './API';


const TOTAL_QUESTIONS = 10

function App() {
  const [loading,setLoading] = useState(false)  
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  console.log(fetchQuest(TOTAL_QUESTIONS,Difficulty.EASY));
  

  const initQuiz = async () => {

  }

  const answer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>A QUIZ BUILD WITH REACT TYPESCRIPT</h1>
      <button className='start' onClick={initQuiz}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
      questionNumber={number + 1}
      totalQuestion={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={answer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
