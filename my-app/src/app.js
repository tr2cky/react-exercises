import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';


export class App extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}