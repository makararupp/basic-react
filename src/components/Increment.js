import React, {useState} from 'react'


const Increment = () => {
    const [count, setCount] = useState(0)

    const handleClick = () =>{
        setCount(count + 1);
    }

   return (
    <>
        <p>You can click Me = {count}</p>
        <button onClick={handleClick}>Add</button>    
    </>
  )
}

export default Increment