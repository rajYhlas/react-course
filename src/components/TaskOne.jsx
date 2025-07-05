import { useEffect, useState } from 'react'
import './App.css'

function TaskOne() {
  const [count, setCount] = useState(parseInt(localStorage.getItem('count-key') ?? 0));

  const onChangeCount = ()=>{
    setCount(count + 1);
  }

  useEffect(()=>{
    localStorage.setItem('count-key', count);
  }, [count])

  return (
    <>
      <h3>{count}</h3>
      <button onClick={onChangeCount}>+</button>
    </>
  )
}

export default function TaskOne() {

