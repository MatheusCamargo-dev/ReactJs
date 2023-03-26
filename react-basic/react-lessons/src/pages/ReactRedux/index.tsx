import { useSelector, useDispatch} from "react-redux";
import { increment, incrementAmount } from "../../features/counter";
import { useStoreSelector } from "../../hooks/useStoreSelector";
interface initialState {
    counter: {
        value: number
    }
}
interface StateStore{
    count: number | string;
    increment: Function;
    incrementAmount: Function;
}

export default function ReactRedux() {
    const counter = useStoreSelector((state: initialState) => state.counter);
    const count = counter.value;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(increment());
        // dispatch({ type: 'counter/increment'})
    }

    const handleBlur = (e: {target: {value: string}}) => {
        const amount = e.target.value;
        dispatch(incrementAmount(Number(amount)));
        // dispatch({type: 'counter/incrementAmount', payload: Number(amount)})
    }
    return(
        <div className="d-flex justify-content-center align-items-center flex-column vh-100">
            <h1 className="text-danger">Hello Redux!</h1>
            <h1 className="text-info" onClick={handleClick}>Counter is {count}</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input type="text" className="form-control" onBlur={handleBlur} placeholder='set counter value' />
            </div>
        </div>
    )
}

// OLD SCHOOL
// const mapStateToProps = (state: initialState) => {
//     return {
//         count: state.counter.value
//     }
// }

// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         increment: () => dispatch({ type: 'counter/increment'}),
//         incrementAmount: (amount: number) => dispatch({type: 'counter/incrementAmount', payload: amount})
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);