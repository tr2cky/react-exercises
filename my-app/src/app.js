import React, { useState } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';


export function App() {
    const [language, setLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            <DisplayLanguage />
        </LanguageContext.Provider>
    )

}