import React from 'react'
import PropTypes from 'prop-types'
import { Instructions } from './instructions'
import CityInput from './cityinput'

export default class WeatherFight extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <React.Fragment>
                <Instructions />
                <CityInput label="Label" onSubmit={(value) => console.log(value)}  />
            </React.Fragment>
        )
    }
}

