import React from "react"

export function HookLogin() {
    const [data, setData] = React.useState(
        {
            username: "",
            password: "",
            remember: false
        }
    )

    function inputHandler(event) {
        const [name, value, type, checked] = [event.target.name, event.target.value, event.target.type, event.target.checked];
        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div>
            <input name="username" type="text" value={data.username} onChange={inputHandler} placeholder="Type Something" />
            <input name="password" type="password" value={data.password} onChange={inputHandler} placeholder="Type Something" />
            <input name="remember" type="checkbox" checked={data.remember} onChange={inputHandler} placeholder="Type Something" />
            <button disabled={!data.username || !data.password} onClick={() => console.log(data)}>Login</button>
        </div>
    )
}
