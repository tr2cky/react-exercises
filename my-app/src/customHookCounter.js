import React from "react";

export function useCounter() {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(c => c + 1)
    }

    function decrement() {
        setCount(c => c - 1)
    }

    function reset() {
        setCount(0)
    }
    return {
        count, setCount, increment, decrement, reset
    }
}