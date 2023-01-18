import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './lists';


const root = document.getElementById('root');


class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);