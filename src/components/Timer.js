import React,{useState, useEffect} from 'react'

const useEffects = () => {

  const [count, setCount] = useState(0)

  useEffect(() =>{
    setTimeout(() => {
        setCount(count + 1);
    }, 1000);
  });

  return (
     <>
        <h2>Number render is {count}</h2>
     </>
  )
}

export default useEffects