
import React from 'react';

export function HookCounterSec() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export class Counter extends React.Component {
  state = {
    count: 0
  };
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, 1000);

  }



  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}