import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
class Hello extends React.Component {
  render() {
    return <div><h1>Hello, World!</h1>
      <p>What a beautiful day!

      </p>
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