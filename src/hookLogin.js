import React from "react"

export function useHookLogin(initialState = { username: "", password: "", remember: false }) {
    const [username, setUsername] = React.useState(initialState.username)
    const [password, setPassword] = React.useState(initialState.password)
    const [remember, setRemember] = React.useState(initialState.remember)

    function inputHandler(event) {
        const [name, value, type, checked] = [event.target.name, event.target.value, event.target.type, event.target.checked];

        if (name === "username") {
            setUsername(value)
        } else if (name === "password") {
            setPassword(value)
        } else if (name === "remember") {
            setRemember(checked)
        }
    }

    return {
        username,
        password,
        remember,
        inputHandler
    }
}

export function HookLogin2() {
    const { username, password, remember, inputHandler } = useHookLogin()

    return (
        <div>
            <input name="username" type="text" value={username} onChange={inputHandler} placeholder="Type Something" />
            <input name="password" type="password" value={password} onChange={inputHandler} placeholder="Type Something" />
            <input name="remember" type="checkbox" checked={remember} onChange={inputHandler} placeholder="Type Something" />
            <button disabled={!username || !password} onClick={() => console.log({
                username,
                password,
                remember
            })}>Login</button>
        </div>

    )




    /* function HookLogin() {
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
   } */
}
