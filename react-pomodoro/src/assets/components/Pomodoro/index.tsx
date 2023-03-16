import { useEffect, useState } from 'react'
import { useInterval } from '../../hooks/use-interval';
import Clock from '../Clock';
import {FaClock, FaPlay, FaStop} from 'react-icons/fa';

import bellStart from '/src/assets/sounds/src_sounds_bell-start.mp3';
import bellFinish from '/src/assets/sounds/src_sounds_bell-finish.mp3';

interface Props{
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

export default function Pomodoro(props: Props){
  const [mainTime, setMainTime] = useState(props.pomodoroTime)
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    if(working){
      document.body.classList.remove('bg-dark')
      document.body.classList.add('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('btn-danger');
        button.classList.add('btn-info')
      })
    }
    if(resting){
      document.body.classList.add('bg-dark')
      document.body.classList.remove('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('btn-info')
        button.classList.add('btn-danger');
      })

    }
  }, [working]);

  const configureWork = ():void =>{
    audioStartWorking.play();
    setTimeCounting(true);
    setWorking(true);
    setResting(false)
    setMainTime(props.pomodoroTime);
  }

  const configureRest = (long: boolean):void =>{
    setTimeCounting(true);
    setWorking(false);
    setResting(true)

    if(long){
      setMainTime(props.longRestTime);
    }else{
      setMainTime(props.shortRestTime);
    }
    audioStopWorking.play();
  }
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null)

  return(
    <div className="text-dark text-center">
      <h2>You are {working ? 'working' : 'resting'} <FaClock /></h2>
      <Clock mainTime={mainTime}/>
      <div className="d-flex display-buttons justify-content-center ms-5 me-5 mt-5">
        <button className="btn btn-danger" onClick={() => configureWork()}>Work</button>
        <button className="btn btn-danger ms-1 me-1 align-items-center" onClick={() => setTimeCounting(!timeCounting)}>{ timeCounting ? <FaStop/> : <FaPlay/>}</button>
        <button className="btn btn-danger  " onClick={() => configureRest(false)}>Rest</button>
      </div>
    </div>
  )
}
