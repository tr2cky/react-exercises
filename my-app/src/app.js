import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';
import { ClickCounter } from './counter';
import { HookCounter } from './hookCounter';


export class App extends React.Component {
    render() {
        return (
            <HookCounter />
        )
    }
}