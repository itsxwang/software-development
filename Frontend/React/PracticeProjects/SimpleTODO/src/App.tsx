import { useState } from 'react'
import Timer from '../components/Timer'
import Todo from '../components/Todo'

function App() {

  const [counter, setCounter] = useState(0)

  return (
      <>
      <Timer />
      <Todo/>
      </>
  )
}

export default App
