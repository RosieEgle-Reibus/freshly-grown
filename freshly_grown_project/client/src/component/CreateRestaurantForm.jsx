import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom' 

export default class CreateRestaurantForm extends Component {
    state = {
        newRestaurant: {
            name: '',
            description: '',
            location: '',
            rest_pic_url: ''
        },
        redirect: false

    }
    createNewRestaurant = (event) => {
        event.preventDefault()
        axios.post('/api/v1/restaurant/', this.state.newRestaurant)
        .then(() => {
            this.setState({redirect: true})
        })
    }

    onChangeRestaurantForm = (event) => {
        const previousState = { ...this.state.newRestaurant }
        previousState[event.target.name] = event.target.value
        this.setState({newRestaurant: previousState})
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/restaurant' />
        }
        return (
            <div>
                <form>
                <input
                        type="string"
                        placeholder="Restaurant Name"
                        id="name"
                        value={this.state.newRestaurant.name}
                        name="name"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Description"
                        id="description"
                        value={this.state.newRestaurant.description}
                        name="description"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Location"
                        id="name"
                        value={this.state.newRestaurant.location}
                        name="location"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Restaurant Pic Url"
                        id="restPicUrl"
                        value={this.state.newRestaurant.rest_pic_url}
                        name="rest_pic_url"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="submit"
                        value="Add New Farm"
                        onClick={this.createNewRestaurant}
                    />
                </form>
                
            </div>
        )
    }
}
