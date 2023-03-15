
import { secondsToTime } from '../../utils/secondsToTime';
interface Props{
  mainTime: number;
}
export default function Clock (props: Props):JSX.Element {
  return(
    <h1 className='text-success'> {secondsToTime(props.mainTime)} </h1>
  )
}
