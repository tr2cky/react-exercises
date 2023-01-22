import React from "react"
import { useCounter } from "./customHookCounter"

export function HookCounter({ initialCount = 0 }) {
    const { count, increment, decrement, reset } = useCounter(initialCount)

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )


}

