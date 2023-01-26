import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Welcome } from "./welcome"
import { HookCounter } from "./hookCounter"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/counter" element={<HookCounter />} />
            <Route path=""
        </Routes>
    )
}