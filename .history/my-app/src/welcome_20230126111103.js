import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const translations = {
    en: {
        hello: "Hello"
    },
    es: {
        hello: "Hola"
    },
    fr: {
        hello: "Bonjour"
    },
    it: {
        hello: "Ciao"
    },
    tr: {
        hello: "Merhaba"
    }
}

export function Welcome({ name = "Stranger" }) {
    const [language] = useContext(LanguageContext);
    return (
        <div>
            <h1> Hello</h1>
        </div>
    )
}