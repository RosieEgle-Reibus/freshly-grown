import React, { Component } from 'react'
import axios from 'axios'


export default class InPerson extends Component {
    state = {
        results: [],
        zip: ''

    }
  
    onChangeZipForm = (event) => {
        const previousState =  {...this.state.zip}
        previousState[event.target.name] = event.target.value
        this.setState({zip: previousState.zip})
    }

    searchZip = (event) => {
        event.preventDefault()
        axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${this.state.zip}`)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
        
    }


    render() {
        return (
            <div>
               <form>
                   <input 
                   type="string"
                   placeholder="Zip Code"
                   id="zip"
                   value={this.state.zip}
                   name="zip"
                   onChange={this.onChangeZipForm}
                   />
                   <input 
                   type="submit"
                   value="Search for Markets"
                   onClick={this.searchZip}/>

               </form>

                {this.state.results.map((market) => {
                    return(
                        <div>
                            <h1>{market.marketname}</h1>
                            </div>
                    )
                })}
            </div>
        )
    }
}
