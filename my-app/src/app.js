import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';


export class App extends React.Component {
    render() {
        return (
            <Sum numbers={[1, 4, 9, 9, 9]} />
        )
    }
}