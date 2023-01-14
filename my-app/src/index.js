import React from 'react';
import ReactDOM from 'react-dom';
import { InteractiveWelcome, Welcome } from './interactive';

const root = document.getElementById('root');


class App extends React.Component {
  render() {
    return (
      <div>
        <InteractiveWelcome />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);