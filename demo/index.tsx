import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pomodoro from '../dist/index';

class DemoApp extends React.Component {
  render() {
    return (
      <div>
        <p>This is a demo for Pomodoro timer component</p>
        <Pomodoro />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');

ReactDOM.render(<DemoApp />, mountNode);
