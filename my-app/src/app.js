import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';
import { ClickCounter, Counter, HookCounterSec } from './counter';
import { HookCounter } from './hookCounter';
import { HookLogin } from './hookLogin';
import { GithubUser } from './githubuser';


export class App extends React.Component {
    render() {
        return (
            <div>
                <GithubUser username="tr2cky"/>
            </div>
        )
    }
}