import { useEffect, useRef, useState } from "react"

const TaskTwo = () => {
    const [time, setTime] = useState(0);
    const [checkStart, setCheckStart] = useState(true);
    const intervalId = useRef(null);

    useEffect(() => {
        if(checkStart){
            intervalId.current = setInterval(
                () => setTime((time) => time + 1), 1000);
        }

        return () => {
            clearInterval(intervalId.current);
        }
    }, [checkStart])

    const removeInterval = () => {
        clearInterval(intervalId.current);
        intervalId.current = null;
        setCheckStart(false)
    }

    const onPause = () => {
        removeInterval()
    }

    const onReset = () => {
        removeInterval();
        setTime(0);
    }

    const onStart = () => {
        setCheckStart(true);
    }
    
    return (
        <>
            <h3>{time}</h3>
            <button onClick={onPause}>Пауза</button> 
            <button onClick={onStart}>Start</button>
            <button onClick={onReset}>Сброс</button>
        </>
    )
}

export default TaskTwo