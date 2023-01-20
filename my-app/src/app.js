import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';
import { DisplayLanguage } from './DisplayLanguage';


export class App extends React.Component {
    render() {
        return (
            <Welcome name="John" />
        )
    }
}