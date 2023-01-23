import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';
import { ClickCounter, Counter, HookCounterSec } from './counter';
import { HookCounter } from './hookCounter';
import { HookLogin, HookLogin2 } from './hookLogin';
import { GithubUser, GithubUserList } from './githubuser';
import CarDetails from './CarDetails';


export class App extends React.Component {
    render() {
        return (
            <div>
                <CarDetails initialData={{ model: "example", year: "2020", color: "red" }} />
            </div>
        )
    }
}