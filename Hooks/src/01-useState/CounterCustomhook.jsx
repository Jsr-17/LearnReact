import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook=()=>{

    const {counter,increment,reset,decrement}= useCounter();

    return(
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(5)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={()=> decrement(17)}>-1</button>
        </>
    )
}