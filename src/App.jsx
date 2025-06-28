import { useState } from "react"
import Age from "./components/Age"
import WishList from "./components/WishList"


function App() {
  const [count, setCount] = useState(16)

  const onChangeCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={onChangeCount}>count ++</button>
    </>
  )
}

export default App
