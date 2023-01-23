import React from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const { data, error, loading } = useGithubUser({ username });

    return (
        <div>
            {data && <h2>Welcome {data.name}</h2>}
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error: {error.message}</h2>}
        </div>
    );
}