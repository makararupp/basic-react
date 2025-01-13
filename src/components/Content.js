import React from 'react'
import Category from './Category';
import Increment from './Increment';
import Form from './Form';

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
     </>
  )
}

export default Content