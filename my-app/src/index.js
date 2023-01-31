import React from 'react';
import ReactDOM from 'react-dom';
import { Login, InteractiveWelcome } from './login';

const root = document.getElementById('root');


class App extends React.Component {
  handleLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <div>
        <Login onLogin={this.handleLogin.bind(this)} />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);