import React from "react"

export function GithubUserList() {
    const [usernames, setUsernames] = React.useState([]);
    const [newUsername, setNewUsername] = React.useState("");

    function handleAddUsername() {
        setUsernames([...usernames, newUsername]);
        setNewUsername("");
    }

    function handleInput(event) {
        setNewUsername(event.target.value);
    }

    return (
        <div>
            <div>
                <input value={newUsername} onChange={handleInput} />
                <button onClick={handleAddUsername}>Add username</button>
            </div>
            <br />
            {usernames.map(username => (
                <GithubUser key={username} username={username} />
            ))}
        </div>
    )
}


export function GithubUser({ username }) {
    const [data, setData] = React.useState(null);
    const [Username, setUsername] = React.useState(null);
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setData(json)
            });
    }, [username]);

    return (
        <div>
            <hr />
            <li>
                Welcome <i> <b> {data?.name}</b></i>
                <br /><i> <b> {data?.name}</b></i> right?
            </li>
        </div>
    )
}