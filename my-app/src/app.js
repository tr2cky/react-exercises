import React, { useState } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { FilteredList } from './FilteredList';
import { HookCounter } from './hookCounter';
import { LanguageContext } from './LanguageContext';


export function App() {
    const [language, setLanguage] = useState('en');
    return (
        <FilteredList list={[{
            "name": "Ali",
            "id": 1,
            "age": 20
        }, {
            "name": "Mehmet",
            "id": 2,
            "age": 17,
        }]} />
    )

}