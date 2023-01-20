import React from "react"

export function Sum({ numbers = [0] }) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return (
        <div>
            <h1>Sum: {sum}</h1>
        </div>
    )
}
