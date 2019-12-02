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
            <div className="all-list">
                <div className="all-title-container">
                    <h1 className="all-title">Our Restaurants</h1>
                </div>
                <div className="all-button-container">
                {this.state.allRestaurants.map((restaurant) => {
                    return (
                        <div className="all-list-div">
                            <div className="all-button-border">
                            <button className="all-button">
                            <Link to={`/restaurant/${restaurant.id}`}>
                                <h1>{restaurant.name}</h1>
                            </Link>
                            </button>
                        </div>
                        </div>
                    )
                })}
                </div>
                <div className="add-button-container">
                <button className="add-button">
                <Link to={'/restaurant/new'}><h2>Add Restaurant</h2></Link>
                </button>
                </div>
            </div>
        )
    }
}
