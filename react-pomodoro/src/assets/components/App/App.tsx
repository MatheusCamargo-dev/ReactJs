import { useState } from 'react'
import Pomodoro from '../Pomodoro'

export default function App() {

  return (
    <div className="container bg-white rounded col-9 col-md-6 mt-5 p-5">
      <Pomodoro
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  )
}
