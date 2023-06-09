import { useState } from "react"

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1:100,
        counter2:10,
        counter3:5
    })
    const {counter1,counter2,counter3}=state

    return (
        <>
            <h1>Counter</h1>
            <p>Valor actual del counter1: {counter1}</p><p>Valor actual del counter2: {counter2}</p><p>Valor actual del counter3: {counter3}</p>


            <hr />
            <button className="btn" onClick={() => {
  
                setCounter({
                    ...state,
                    counter1: counter1+1,
                    counter2:counter2+1,
                    counter3:counter3+1
                })
                
            }
            }>
                +1
            </button>
            <button className="btn" onClick={() => {
                setCounter(
                    {
                        ...state,
                        counter1:counter1-1,
                        counter2:counter2-1,
                        counter3:counter3-1,
                    }
                )

            }}>
                -1
            </button>
            <button className="btn" onClick={() => {
                setCounter({
                    ...state,
                    counter1:counter1*2,
                    counter2:counter2*2,
                    counter3:counter3*3
                })

            }}>
                *2
            </button>
            <button
               className="btn" onClick={() => {
                    setCounter({
                        ...state,
                        counter1:counter1/2,
                        counter2:counter2/2,
                        counter3:counter3/2
                    })
                }}
            >
                /2
            </button>
        </>
    )
}
