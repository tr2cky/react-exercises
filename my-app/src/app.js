import React from 'react';
import { TodoList } from './lists';
import { Welcome } from './welcome';
import { Login } from './login';
import { Container } from './composition';


export class App extends React.Component {
    render() {
        return (
            <TodoList
                render={(items, handleRemove) => (
                    <div>
                        <ul>
                            {items.map((item, index) => {
                                return <li key={"todo" + index}>
                                    {item}
                                    <button onClick={() => handleRemove(index)}
                                    >Remove
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                )}

            />
        );
    }
}