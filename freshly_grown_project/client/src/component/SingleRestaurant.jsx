import React, { Component} from 'react'
import axios from 'axios'
import { Link, Redirect} from 'react-router-dom'

export default class SingleRestaurant extends Component {
    state = {
            restaurantId: '',
            name: '',
            description: '',
            location: '',
            farm_pic_url: '',
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
            <div>
               {this.state.name}
            <Link to={`/restaurant/edit/${this.props.match.params.restaurantId}`}>Edit</Link>
            <button onClick={() => {
                this.onRestaurantDeleteClick()
            }}>Delete Restaurant</button>
            </div>
        )
    }
}
