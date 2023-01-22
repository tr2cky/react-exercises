import React from "react"

export function GithubUser({ username }) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json)
                setData(json)
            });
    }, [username]);

    return (
        <div>
            <h1> Welcome <i> <b> {data?.name}</b></i> </h1>
            <br /><i> <b> {data?.name}</b></i> right?
        </div>
    )
}