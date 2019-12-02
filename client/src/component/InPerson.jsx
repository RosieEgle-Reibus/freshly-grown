import React, { Component } from 'react'
import '../Market.css'
import axios from 'axios'


export default class InPerson extends Component {
    state = {
        results: [],
        zip: ''

    }

    onChangeZipForm = (event) => {
        const previousState = { ...this.state.zip }
        previousState[event.target.name] = event.target.value
        this.setState({ zip: previousState.zip })
    }

    searchZip = (event) => {
        event.preventDefault()
        axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${this.state.zip}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
            })

    }

    splitStringMiles = (string) => {
        return string.substr(0, string.indexOf(' '))
    }

    splitStringName = (string) => {
        return string.substr(string.indexOf(' ') + 1)
    }

    render() {
        return (
            <div className="market-container">
                
                <h1 className="all-title">Find a Market Near You</h1>
                <form>
                    <label for="zip" className="zip-label">Enter Your Zip Code</label>
                    <input
                        type="string"
                        
                        id="zip"
                        value={this.state.zip}
                        name="zip"
                        onChange={this.onChangeZipForm}
                    />
                    <input
                        type="submit"
                        value="Search "
                        onClick={this.searchZip} />

                </form>

                {this.state.results.map((market) => {
                    return (
                        <div>
                            <h1>{this.splitStringMiles(market.marketname)} Miles Away</h1>
                            <h1>{this.splitStringName(market.marketname)}</h1>

                        </div>
                    )
                })}
            </div>
           
        )
    }
}
