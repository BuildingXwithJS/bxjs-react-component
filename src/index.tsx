import * as React from 'react';

enum PomodoroState {
  Initialized = 'Inititalized',
  Running = 'Running',
  Stopped = 'Stopped',
}

export default class Pomodoro extends React.Component {
  state = {time: 25, state: PomodoroState.Initialized};

  private timer = 0;

  handleDurationChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({time: e.currentTarget.value});
  };

  startTimer = () => {
    const {time} = this.state;
    const timeInMilliseconds = time * 60 * 1000;
    this.setState({state: PomodoroState.Running});
    this.timer = window.setTimeout(this.onTimerEnd, timeInMilliseconds);
  };

  onTimerEnd = () => {
    this.setState({state: PomodoroState.Stopped});
  };

  render() {
    const {time, state} = this.state;

    return (
      <div>
        <div>
          Duration <input type="text" value={time} onChange={this.handleDurationChange} />
        </div>
        <div>State: {state}</div>
        <div>
          <button onClick={this.startTimer}>Start</button>
        </div>
      </div>
    );
  }
}
