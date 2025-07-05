import { useState, useEffect } from "react"

const TaskTwo = () => {
    const [name, setName] = useState(sessionStorage.getItem('name-key') ?? '')

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    useEffect(()=>{
        sessionStorage.setItem('name-key', name);
      }, [name])

    return(
        <>
            <input value={name} onChange={onChangeName}/>

            <h3>{name}</h3>
        </>
    )
}

export default TaskTwo