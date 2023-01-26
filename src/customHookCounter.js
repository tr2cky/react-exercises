import React, { useCallback, useState } from "react";

export function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);



    const increment = useCallback(function increment() {
        setCount(c => c + 1)
    }, [])

    const decrement = useCallback(function decrement() {
        setCount(c => c - 1)
    }, [])

    const reset = useCallback(function reset() {
        setCount(initialCount)
    }, [initialCount])

    return {
        count, setCount, increment, decrement, reset
    }
}