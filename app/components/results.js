import React from 'react'
import {fetchWeather} from './utils/weatherapi'

export default class Results extends React.Component {
    render() {
        return (
            
            <pre>{JSON.stringify(this.props, null, 2)} </pre>
        )
    }
}