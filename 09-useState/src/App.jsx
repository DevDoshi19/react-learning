import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(10);
  const increase = () => {
    setCount(count + 1);
  }

  return (
    <div>
    <h1>The value of a is {count}</h1>
    <button onClick={increase}>click</button>
    </div>
  )
}

export default App