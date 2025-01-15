import React,{useState, useRef, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const countRef = useRef(2);
    console.log(countRef);

    const inputRef = useRef();

    const countWithState = () =>{
        const updateCount = count + 1;
        console.log(`Clicked ${updateCount} times`)
        // console.log('Clicked'+ updateCount + 'times');
        setCount(updateCount);
    }

    const countWithRef = () =>{
        countRef.current++;
        console.log(`Cliked ${countRef.current} times`)
    }
    useEffect (() =>{
        inputRef.current.focus();
        console.log(inputRef.current)
    },[])

  return (
     <>
        <div>
        <button onClick={countWithState}>Click me with State</button>
        <p>Clicked me {count} times</p>
        </div>
        <hr/>
        <div>
            <button onClick={countWithRef}>Clicked me with Reaf</button>
            <p>Your cliked me {countRef.current} times</p>
        </div>
        <div>
            <input type="text" ref={inputRef}/>
        </div>
        <hr/>
     </>
  )
}

export default Counter