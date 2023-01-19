import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';


export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Bro" />
            </div>
        );
    }
}