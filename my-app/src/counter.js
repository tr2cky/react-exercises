import React from 'react';

export class Counter extends React.Component {
  state = {
    count: (this.props.initialValue || 0)
  };
    constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {count: state.count +(this.props.incrementBy || 1)};
      });
      }, this.props.timeout || 1000);
    }


  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

export class CounterDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
      </div>
    );
  }
}

export class ClickCounter extends React.Component {
  state = {
    count: 0
  }

  render () {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
        <button onClick={() => {
          this.setState((state) => {
            return {count: state.count + 1};
          });
        }}>Click me</button>
      </div>
    );
  }
}
 