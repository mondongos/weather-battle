import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import WeatherFight from './components/weatherfight'

class App extends React.Component {
    render() {
        return (
             <div className="container">
                <WeatherFight/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)