import React from 'react'
import Category from './Category';
import Increment from './Increment';
import Form from './Form';
import Timer from './Timer';
import Counter from './Counter';

const Content = () => {
  //create function outbouand return type
  const Message = (message) =>{
    alert(message);
  }

  return (
     <>
      <button onClick={() =>Message("Camboida")}>Click Me</button>
      <Category/>
      <Increment/>
      <Form/>
     <Timer/>
     <Counter/>
     </>
  )
}

export default Content