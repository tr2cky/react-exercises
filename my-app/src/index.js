import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Age extends React.Component {
  render() {
    return ( <div> {this.props.age > 18 
    ? <p>Your age is {this.props.age}</p>
    : <p>You are very young!</p>}
    
    </div>)
  }
}

class Welcome extends React.Component {
  render() {
    return <div>
      <p>
        Welcome, {this.props.name || "Undefined User"}!
      </p>
      {this.props.age < 65 && this.props.name == "John" && <Age age={this.props.age} />}
    </div>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="John" age={2} />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);