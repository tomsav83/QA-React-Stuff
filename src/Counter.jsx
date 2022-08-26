import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const decrementByOne = () => setCount((count) => count - 1)
  const decrementByFive = () => setCount((count) => count - 5)
  const reset = () => setCount(0)
  const incrementByOne = () => setCount((count) => count + 1)
  const incrementByFive = () => setCount((count) => count + 5)

  return (
    <div>
      <br />
      <h1>Counter Exercise</h1>
      <br />

      <h2>{count}</h2>
      <br />
      <button
        onClick={() => {
          decrementByFive()
        }}
      >
        -5
      </button>
      <button
        onClick={() => {
          decrementByOne()
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          reset()
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          incrementByOne()
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          incrementByFive()
        }}
      >
        +5
      </button>
    </div>
  )
}
export default Counter
