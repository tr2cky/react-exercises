import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Welcome extends React.Component {
  render() {
    return <p>
      Welcome, {this.props.name || "Undefined User"}!
    </p>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);