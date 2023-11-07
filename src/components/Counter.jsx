import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }


    return (
        <>
            <div>Counter App</div>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter


/**
 * 1. state - count: 0
 * 2. actions - increment, decrement, reset
 * 3. reducer 
 * - increment -> cont => count +1
 * - decrement -> cont => count -1
 * - reset -> cont => count = 0
 * 4. store
 * 5. Providing store in react by react-redux form main.js
 * 6. use store
*/