import React from 'react';
import ReactDOM from 'react-dom';
import { Login, InteractiveWelcome } from './login';

const root = document.getElementById('root');


class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);