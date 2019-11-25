import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



export default class AllFarms extends Component {
    state = {
        allFarms: []
    }
    componentDidMount() {
        axios.get('/api/v1/farm')
          .then((res) => {
            console.log(res.data)
            const allFarms = res.data
            this.setState({ allFarms: allFarms })
    
          })
      }
    render() {
        return (
            <div>
             {this.state.allFarms.map((farm) => {
            return (
              <div className="App">
                <Link to={`/farm/${farm.id}`}>
                  <h1>{farm.name}</h1>
                </Link>
              </div>
            )
          })}  
            </div>
        )
    }
}
