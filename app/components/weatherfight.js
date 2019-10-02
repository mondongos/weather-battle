import React from 'react'
import { Instructions } from './instructions'
import CityInput from './cityinput'
import { CityPreview } from './citypreview'
import Results from './results'

export default class WeatherFight extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            city1: null, 
            city2: null,
            fight: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit(id, city) {
        this.setState({
            [id]: city
        })
    }

    handleReset(id) {
        this.setState({
            [id]: null
        })
    }
     
    render() {
        const { city1, city2} = this.state
        if (fight === true) {
            return <Results city1={city1} city2={city2}/>
        }
        return (
            <React.Fragment>
                <Instructions />
                <div className="cities-container">
                    <h1>Cities</h1>
                    <div className="city-row">
                        {city1 === null  
                            ? <CityInput
                                label="City One"
                                onSubmit={(city) => this.handleSubmit("city1", city)}
                                />
                            : <CityPreview
                                city={city1}
                                label="City 1"
                                onReset={() => this.handleReset("city1")} 
                                />
                        } 

                        {city2 === null  
                            ? <CityInput
                                label="City Two"
                                onSubmit={(city) => this.handleSubmit("city2", city)}
                                />
                            : <CityPreview
                                city={city2}
                                label="City 2"
                                onReset={() => this.handleReset("city2")} 
                                />
                        }
                    </div>
                    {city1 && city2 (
                        <button
                        onClick={() => this.setState({fight: true})}>
                            Fight!
                        </button>
                    )}
                </div>
                
            </React.Fragment>
        )
    }
}

