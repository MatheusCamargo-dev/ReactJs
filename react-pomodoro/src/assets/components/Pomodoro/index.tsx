import { useState } from 'react'
import { useInterval } from '../../hooks/use-interval';
import Clock from '../Clock';
import {FaClock} from 'react-icons/fa';
interface Props{
  defaultTimer: number;
}
export default function Pomodoro(props: Props){
  const [mainTime, setMainTime] = useState(props.defaultTimer)
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)
  return(
    <div className="text-dark text-center">
      <h2>You are working <FaClock /></h2>
      <Clock mainTime={mainTime}/>
    </div>
  )
}
