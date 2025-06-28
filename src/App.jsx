import { useState } from "react"
import Age from "./components/Age"
import WishList from "./components/WishList"
import ToggleButton from "./components/ToggleButton"


function App() {
  const [count, setCount] = useState(16)

  const onChangeCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <ToggleButton/>
    </>
  )
}

export default App
