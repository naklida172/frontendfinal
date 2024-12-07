import React from 'react';
import './styles/App.css';
import './styles/Timer.css';
import './styles/Sections.css';
import './styles/Intervals.css'
import Timer from './components/timer.jsx';
import Interval from './components/intervals.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Pomodoro Timer</h1>
                <Timer />
                <Interval/>
            </header>
        </div>
    );
}

export default App;
