import React from 'react'
import Category from './Category';

const Content = () => {
  //create function outbouand return type
  const Message = (message) =>{
    alert(message);
  }

  return (
     <>
      <button onClick={() =>Message("Camboida")}>Click Me</button>
      <Category/>
     </>
  )
}

export default Content