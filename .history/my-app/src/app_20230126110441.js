import React from "react"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Welcome } from "./welcome"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
        </Routes>
    )
    