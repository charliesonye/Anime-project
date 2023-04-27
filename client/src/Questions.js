import React from 'react'
import Question from './Question'
import questionsData from './QuestionsData'

 function Questions({ score, setScore}) {
  let questionsList = questionsData.map(question => question )
  
  return (
    <div className='Questions'>
      
      <br />
      <h1>  Test Your Knowledge</h1>
      <hr />
      <Question questions={questionsList} score={score} setScore={setScore} />
      <br />
      <br /> 
     
    </div>
  )
}

export default Questions