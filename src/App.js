import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const {
    waiting,
    loading,
    questions,
    error,
    correct,
    index,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      {/* <Modal /> */}
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
                className='answer-btn'
                onClick={() => checkAnswer(correct_answer === answer)}
              />
            );
          })}
        </article>
        <button className='next-question' onClick={nextQuestion}>
          {' '}
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
