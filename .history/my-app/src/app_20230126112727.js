import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Welcome } from "./welcome"
import { HookCounter } from "./hookCounter"
import { ShowGithubUser } from "./ShowGithubUser"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/counter" element={<HookCounter />} />
            <Route path="users/:username" element={<ShowGithubUser } />
        </Routes>
    )
}