import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllRestaurants extends Component {
    state = {
        allRestaurants: []
    }
    componentDidMount() {
        axios.get('/api/v1/restaurant')
        .then((res) => {
            this.setState({allRestaurants: res.data})
        
        })
    }
    render() {
        return (
            <div>
                {this.state.allRestaurants.map((restaurant) => {
                    return (
                        <div>
                            <Link to={`/restaurant/${restaurant.id}`}>
                                <h1>{restaurant.name}</h1>
                            </Link>
                        </div>
                    )
                })}
                <Link to={'/restaurant/new'}>Add New Restaurant</Link>
                
            </div>
        )
    }
}
