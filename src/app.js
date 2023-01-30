import React from "react"
import { Link, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Welcome } from "./welcome"
import { HookCounter } from "./hookCounter"
import { ShowGithubUser } from "./ShowGithubUser"
import { GithubUserList } from "./githubuser"

export default function App() {
    return (
        <div>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/counter">Counter</Link> &nbsp;&nbsp;
            <Link to="/users/robert">Robert</Link>
            <br />
            <br />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/counter" element={<HookCounter />} />
                <Route path="users" element={<GithubUserList />}>
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}