
import { secondsToMinute } from '../../utils/secondsToMinute';
interface Props{
  mainTime: number;
  color: string;
}
export default function Clock (props: Props):JSX.Element {
  return(
    <h1 className={props.color}> {secondsToMinute(props.mainTime)} </h1>
  )
}
