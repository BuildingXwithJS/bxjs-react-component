declare module 'bxjs-react-component/index' {
'import * as React from 'react'; enum PomodoroState {
'    Initialized = "Inititalized",
'    Running = "Running",
'    Stopped = "Stopped"
'}
'export default class Pomodoro extends React.Component {
'    state: {
'        time: number;
'        state: PomodoroState;
'    };
'    private timer;
'    handleDurationChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
'    startTimer: () => void;
'    onTimerEnd: () => void;
'    render(): JSX.Element;
'}
'export {};

}
declare module 'something' {
'}
