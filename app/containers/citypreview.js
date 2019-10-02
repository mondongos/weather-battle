import React from 'react'
import PropTypes from 'prop-types'

export function CityPreview ({city, onReset, label}) {
    return (
        <div className="column-city">
            {city}
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

CityPreview.propTypes = {
    city: PropTypes.string.isRequired, 
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

