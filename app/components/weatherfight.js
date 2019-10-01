import React from 'react'
import PropTypes from 'prop-types'
import { Instructions } from './instructions.js'

export default class WeatherFight extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <React.Fragment>
                <Instructions />
            </React.Fragment>
        )
    }
}

