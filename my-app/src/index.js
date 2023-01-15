import React from 'react';
import ReactDOM from 'react-dom';
import { Login, UncontrolledLogin } from './login';

const root = document.getElementById('root');


class App extends React.Component {
  render() {
    return (
      <div>
        <UncontrolledLogin />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);