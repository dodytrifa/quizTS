import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard'
import { QuestionState, fetchQuest, Difficulty } from './API';

const TOTAL_QUESTIONS = 10

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const App: React.FC = () => {
  const [loading,setLoading] = useState(false)  
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
 
  // console.log(fetchQuest(TOTAL_QUESTIONS,Difficulty.       EASY));
  

  const initQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuest(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
  }

  const answer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const initQuizz = () => {
    console.log("halo");
    
  }
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>A QUIZ BUILD WITH REACT TYPESCRIPT</h1>
      
      {/* <button className='start' onClick={initQuizz}>Start</button> */}
      {
      gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={initQuiz}>
          Start
          </button>
      ): null 
      }
      {!gameOver ? <p className='score'>Score:</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
        questionNumber={number + 1}
        totalQuestion={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={answer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>Next Question</button>
      ): null}
    </div>
  );
}

export default App;
