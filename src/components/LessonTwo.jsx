import { useEffect, useState } from "react";

const LessonTwo = () => {
    const [count, setCount] = useState();
    const [count2, setCount2] = useState(0);

    const onClick = () => {
        setCount(count +1)
    }

    useEffect(()=>{
        setCount(0)
    },[])

    console.log('count', count)
    return(
        <>
        <h3>{count}</h3>
        <button onClick={onClick}>plus</button>
        <h3>{count2}</h3>
        <button onClick={() => setCount2(count2 +1)}>plus</button>
        </>
    )
}

export default LessonTwo;