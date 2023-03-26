
import { connect } from "react-redux";
interface initialState {
    counter: {
        value: number
    }
}

export function ReduxConn({count, increment}: {count?: number | string, increment?: Function}) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className='text-warning'> This is counter from Redux: {count}</h1>
      </div>
    )
}


const mapStateToProps = (state: initialState) => {
    return {
        count: state.counter.value
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        increment: () => dispatch({ type: 'counter/increment'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxConn);
