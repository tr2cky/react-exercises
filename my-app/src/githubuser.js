import React from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const { data, error, loading, fetchData } = useGithubUser({ username });

    return (
        <div>
            {data && !loading && <h2>Welcome {data.name}</h2>}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error: {error.message}</h2>}
            <button onClick={fetchData}>Update Data</button>
        </div>
    );
}