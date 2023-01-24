import React, { useState } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { HookCounter } from './hookCounter';
import { LanguageContext } from './LanguageContext';


export function App() {
    const [language, setLanguage] = useState('en');
    return (
        <HookCounter />
    )

}