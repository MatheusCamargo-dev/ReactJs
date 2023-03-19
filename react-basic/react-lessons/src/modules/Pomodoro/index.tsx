import { useEffect, useState, useRef} from 'react'
import { useInterval } from '../../utils/use-interval';
import Clock from '../Clock';
import {FaClock} from 'react-icons/fa';
import {BsStopwatch} from 'react-icons/bs';
import {IoIosStopwatch} from 'react-icons/io';

import bellStart from '/src/assets/sounds/src_sounds_bell-start.mp3';
import bellFinish from '/src/assets/sounds/src_sounds_bell-finish.mp3';
import { secondsToTime } from '../../utils/secondsToTime';

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
  const [cycles, setCycles] = useState(Array.from({ length: props.cycles }, (_, index) => index + 1));
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);
  const container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    if(working){
      container.current?.classList.remove('bg-dark')
      container.current?.classList.add('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('btn-danger');
        button.classList.add('btn-info')
      })
    }
    if(resting){
      container.current?.classList.add('bg-dark')
      container.current?.classList.remove('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('btn-info')
        button.classList.add('btn-danger');
      })
    }

    if(mainTime > 0) return;

    if(working && cycles.length > 0){
      configureRest(false);
      cycles.pop();
    }
    if(working && cycles.length <= 0){
      configureRest(true);
      setNumberOfPomodoros(numberOfPomodoros + 1);
      setCycles(Array.from({ length: props.cycles }, (_, index) => index + 1))
    }
    if(working) setCompletedCycles(completedCycles + 1);
    if(resting) configureWork();
  }, [working, resting, mainTime, cycles, numberOfPomodoros, completedCycles,props.cycles, configureRest, configureWork]);


  useInterval(() => {
    setMainTime(mainTime - 1);
    if(working)setFullWorkingTime(fullWorkingTime + 1);
  }, timeCounting ? 1000 : null)

  return(
    <div className="container-pomodoro vh-100 w-100 p-5" ref={container}>
      <div className="container bg-white rounded col-12 col-md-6 vh-50 col-md-6 p-5">
        <div className="text-dark text-center h-50">
          <h2 className='text-nowrap'>You are {working ? 'working' : 'resting'} <FaClock /></h2>
          <Clock
            mainTime={mainTime}
            color={working ? 'text-success' : 'text-info' }
          />
          <div className="d-flex display-buttons justify-content-center ms-5 me-5 mt-5">
            <button className="btn btn-danger me-1" onClick={() => configureWork()}>Work</button>
            <button className={!working && !resting ? "d-none" : "btn btn-danger align-items-center py-1 px-2"} onClick={() => setTimeCounting(!timeCounting)}>{ timeCounting ? <BsStopwatch size={24} /> : <IoIosStopwatch size={24}/>}</button>
            <button className="btn btn-danger ms-1" onClick={() => configureRest(false)}>Rest</button>
          </div>
          <div className="col mt-5 text-start">
            <p>Completed work cycles: {completedCycles}</p>
            <p>Working time: {secondsToTime(fullWorkingTime)}</p>
            <p>Completed Pomodoros: {numberOfPomodoros}</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
