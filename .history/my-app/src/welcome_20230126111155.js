import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

import React from "react"

export function Welcome({ name = "Stranger" }) {
    return (
        <div>
            <h1> Hello, {name}!</h1>
        </div>
    )
}