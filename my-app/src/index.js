import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Welcome extends React.Component {
  render() {
    return <div>
      <p>
        Welcome, {this.props.name || "Undefined User"}!
      </p>
      <p> Your age is {this.props.age || 0}</p>
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Traktör" age={11} />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);