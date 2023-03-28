import { useState } from "react";
import Content from "./Content-memo"

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const Increase = () => {
    setCount(count + 1)
  }

  const Increase2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <div>
      <Content count={count}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={Increase}>Click me!</button>
      <button onClick={Increase2}>Click me 2!</button>
    </div>
  )
}

export default App