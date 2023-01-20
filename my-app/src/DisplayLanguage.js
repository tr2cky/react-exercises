import React from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./welcome";

export class DisplayLanguage extends React.Component {
    state = {
        language: "en"
    }
    languageHandler(event) {
        this.setState((state) => {
            return {
                language: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={(event) => this.setState({ language: event.target.value })}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="it">Italian</option>
                    <option value="tr">Turkish</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <Welcome />
                </LanguageContext.Provider>
            </div>
        )

    }
}