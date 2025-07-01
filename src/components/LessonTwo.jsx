import { useState } from "react";

const LessonTwo = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count +1)
    }

    return(
        <>
        <h3>{count}</h3>
        <button onClick={onClick}>plus</button>
        </>
    )
}

export default LessonTwo;