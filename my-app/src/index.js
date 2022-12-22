import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Message extends React.Component {
  render() {
    return <p>What a beautiful day!

    </p>
  }
}

class Hello extends React.Component {
  render() {
    return <div><h1>Hello, World!</h1>
      <Message />
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);