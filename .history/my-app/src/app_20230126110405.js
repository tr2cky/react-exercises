import React from "react"
import { Routes } from "react-router-dom"


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
        </Routes>
    )