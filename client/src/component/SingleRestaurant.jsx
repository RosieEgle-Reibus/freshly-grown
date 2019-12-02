import React, { Component} from 'react'
import axios from 'axios'
import { Link, Redirect} from 'react-router-dom'

export default class SingleRestaurant extends Component {
    state = {
            restaurantId: '',
            name: '',
            description: '',
            location: '',
            rest_pic_url: '',
            redirect: false
    }
    componentDidMount() {
        const restaurantId = this.props.match.params.restaurantId
        axios.get(`/api/v1/restaurant/${restaurantId}`)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
    }
    onRestaurantDeleteClick = () => {
        const restaurantId = this.props.match.params.restaurantId 
        axios.delete(`/api/v1/restaurant/${restaurantId}/`)
        .then(() => {
            this.setState({redirect: true})
        })
    }
    render() {
        if (this.state.redirect === true) {
           return <Redirect to="/restaurant" />
        }
        return (
            <div className="single-farm-container">
                <div className="farm-data-container">
                    <div className="farm-img-div">
                <img src={this.state.rest_pic_url} width="700"/>
                </div>
                <div className="farm-info-div">
               <h1 className="farm-name">{this.state.name}</h1>
               <h1>{this.state.description}</h1>
               <h2 className="farm-location">{this.state.location}</h2>
               </div>
               </div>
            <div className="farm-button-container">
            <button>   
            <Link to={`/restaurant/edit/${this.props.match.params.restaurantId}`}><h2>Edit</h2></Link>
            </button>
            <button onClick={() => {
                this.onRestaurantDeleteClick()
            }}><h2>Delete</h2></button>
            </div>
            </div>
        )
    }
}
