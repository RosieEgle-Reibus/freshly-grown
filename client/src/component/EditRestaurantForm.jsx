import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class EditRestaurantForm extends Component {
    state = {
        changeRestaurant: {
            restaurantId: '',
            name: '',
            description: '',
            location: '',
            rest_pic_url: ''
        },
        redirect: false
    }
    componentDidMount() {
        const restaurantId = this.props.match.params.restaurantId
        axios.get(`/api/v1/restaurant/${restaurantId}`)
        .then((res) => {
            console.log(res.data)
            this.setState({changeRestaurant: res.data})
        })
    }
    editSingleRestaurant = (event) => {
        event.preventDefault()
        const restaurantId = this.props.match.params.restaurantId
        axios.put(`/api/v1/restaurant/${restaurantId}/`, this.state.changeRestaurant)
        .then(() => {
            this.setState({redirect: true})
        })
    }
    onChangeRestaurantForm = (event) => {
        const previousState = { ...this.state.changeRestaurant }
        previousState[event.target.name] = event.target.value
        this.setState({ changeRestaurant: previousState })
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to={`/restaurant/${this.props.match.params.restaurantId}`} />
        }
        return (
            <div>
                <form>
                <input
                        type="string"
                        placeholder="Restaurant Name"
                        id="name"
                        value={this.state.changeRestaurant.name}
                        name="name"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Description"
                        id="description"
                        value={this.state.changeRestaurant.description}
                        name="description"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Location"
                        id="name"
                        value={this.state.changeRestaurant.location}
                        name="location"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="string"
                        placeholder="Restaurant Pic Url"
                        id="restPicUrl"
                        value={this.state.changeRestaurant.rest_pic_url}
                        name="rest_pic_url"
                        onChange={this.onChangeRestaurantForm}
                    />
                <input
                        type="submit"
                        value="Save Changes"
                        onClick={this.editSingleRestaurant}
                    />
                </form>
                
            </div>
        )
    }
}
