import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./welcome";

export function DisplayLanguage() {
    const [language, setLanguage] = useContext(LanguageContext);

    function onChangeHandler(event) {
        setLanguage(event.target.value);
    }

    return (
        <div>
            <select value={language} onChange={onChangeHandler}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
                <option value="tr">Turkish</option>
            </select>
            <Welcome />
        </div>
    )
}