import React, { Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleRestaurant extends Component {
    state = {
            restaurantId: '',
            name: '',
            description: '',
            location: '',
            farm_pic_url: ''
    }
    componentDidMount() {
        const restaurantId = this.props.match.params.restaurantId
        axios.get(`/api/v1/restaurant/${restaurantId}`)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
    }
    render() {
        return (
            <div>
               {this.state.name}
            <Link to={`/restaurant/edit/${this.props.match.params.restaurantId}`}>Edit</Link>
            </div>
        )
    }
}
