import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';


export class App extends React.Component {
    render() {
        return (
            <Container>
                <Welcome name="Bob" />
            </Container>
        );
    }
}