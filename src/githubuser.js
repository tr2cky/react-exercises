import React from "react"
import { Link, Outlet } from "react-router-dom";

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
                <ul>
                    <li> <Link to="/users/tr2cky" >Tr2cky </Link> </li>
                    <li> <Link to="/users/Robert" >Robert </Link> </li>
                    <li> <Link to="/users/Fatih" >Fatih </Link> </li>
                    <li> <Link to="/users/Adrian" >Adrian </Link> </li>
                    <li> <Link to="/users/Semih" >Semih </Link> </li>
                </ul>
            </div>
            <br />
            <hr />
            {usernames.map(username => (
                <GithubUser key={username} username={username} />
            ))}
            <Outlet />
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