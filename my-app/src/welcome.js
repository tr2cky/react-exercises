import React from "react"
import { LanguageContext } from "./LanguageContext"

const Strings = {
    en: { welcome: "Welcome EN" },
    es: { welcome: "Bienvenido ES" },
    fr: { welcome: "Bienvenue FR" },
    it: { welcome: "Benvenuto IT" },
    tr: { welcome: "Hoşgeldiniz TR" }
}

export class Welcome extends React.Component {
    render() {
        return <div className="welcome">
            <LanguageContext.Consumer>
                {language => <h1> {Strings[language].welcome}</h1>}
            </LanguageContext.Consumer>
        </div>
    }
}