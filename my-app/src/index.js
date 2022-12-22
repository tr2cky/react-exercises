import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class Welcome extends React.Component {
  render () {
    return <p> 
      Welcome, {this.props.name}!
    </p>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Adrian" />
      </div>
    );
  }
}


ReactDOM.render(<App />, root);