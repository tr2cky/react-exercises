import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Age extends React.Component {
  render() {
    return <p> Your age is {this.props.age || 0}</p>
  }
}

class Welcome extends React.Component {
  render() {
    return <div>
      <p>
        Welcome, {this.props.name || "Undefined User"}!
      </p>
      <Age age={this.props.age} />
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={[<strong>Fatih</strong>]} age={22} />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);