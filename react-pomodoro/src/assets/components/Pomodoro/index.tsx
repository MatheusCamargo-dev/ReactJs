import { useEffect, useState } from 'react'
import { useInterval } from '../../hooks/use-interval';
import Clock from '../Clock';
import {FaClock, FaPlay, FaStop} from 'react-icons/fa';
interface Props{
  defaultTimer: number;
}

export default function Pomodoro(props: Props){
  const [mainTime, setMainTime] = useState(props.defaultTimer)
  const [initCount, setInitCount] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('.btn');
    if(working){
      document.body.classList.remove('bg-dark')
      document.body.classList.add('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('bg-danger');
        button.classList.add('bg-secondary')
      })
    }else{
      document.body.classList.add('bg-dark')
      document.body.classList.remove('bg-danger')
      buttons.forEach(button => {
        button.classList.remove('bg-secondary')
        button.classList.add('bg-danger');
      })

    }
  }, [working]);

  const configureWork = (r: boolean):void =>{
    setInitCount(r);
    setWorking(r);
  }
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, initCount ? 1000 : null)
  return(
    <div className="text-dark text-center">
      <h2>You are working <FaClock /></h2>
      <Clock mainTime={mainTime}/>
      <div className="d-flex display-buttons justify-content-center ms-5 me-5 mt-5">
        <button className="btn btn-danger" onClick={() => configureWork(!working)}>{ working ? 'Resting' : 'Working'}</button>
        <button className="btn btn-danger ms-1 me-1 align-items-center" onClick={() => configureWork(!working)}>{ working ? <FaStop/> : <FaPlay/>}</button>
        <button className="btn btn-danger" onClick={() => setMainTime(1500)}>Restart</button>
      </div>
    </div>
  )
}
