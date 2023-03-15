import { useState } from 'react'
import Pomodoro from '../Pomodoro'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container bg-white rounded col-6 mt-5 p-5">
      <Pomodoro defaultTimer={1500}/>
    </div>
  )
}
