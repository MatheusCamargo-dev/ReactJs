import { useState } from 'react'
import { useInterval } from '../../hooks/use-interval';
interface Props{
  defaultTimer: number;
}
export default function Pomodoro(props: Props){
  const [mainTime, setMainTime] = useState(props.defaultTimer)

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)
  return(
    <div className="text-white">
      <h1>Count: {mainTime}</h1>
    </div>
  )
}