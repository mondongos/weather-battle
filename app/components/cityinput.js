import React from 'react'
import PropTypes from 'prop-types'

export default class CityInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cityName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.cityName)
    }

    handleChange(event) {
        this.setState ({
            cityName: event.target.value
        })
    }

    render () {
        return(
        <form className="column city" onSubmit={this.handleSubmit}>
            <label htmlFor="cityName" className="city-label">
                {this.props.label}
            </label>
            <div className="row city-inputs">
                <input
                type="text"
                id="cityName"
                className="input-light"
                placeholder="City Name"
                autoComplete="off"
                value={this.state.cityName}
                onChange={this.handleChange}
                />
                <button
                className="btn btn-dark"
                type="submit"
                disabled={!this.state.cityName}>
                    Submit
                </button>
            </div>
        </form>
        )
    }
}

CityInput.propTypes = {
    onSubmit: PropTypes.func.isRequired, 
    label: PropTypes.string.isRequired
}