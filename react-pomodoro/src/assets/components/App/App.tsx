import { useState } from 'react'
import Pomodoro from '../Pomodoro'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pomodoro defaultTimer={1500}/>
    </div>
  )
}
