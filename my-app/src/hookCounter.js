import React from "react"

export function HookCounter({ onCounterChange }) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (onCounterChange) {
            onCounterChange(count);
        }
    }, [count, onCounterChange]);

    function clickHandler(event) {
        setCount(c => c + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={clickHandler}>Click me</button>
        </div>

    )
}

