import React from "react"
import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
    const data = useGithubUser({ username });

    return (
        <div>
            <h1> Welcome <i> <b> {data?.name}</b></i> </h1>
            <br /><i> <b> {data?.name}</b></i> right?
        </div>
    )
}