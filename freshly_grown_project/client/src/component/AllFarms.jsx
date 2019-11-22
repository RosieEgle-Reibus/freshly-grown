import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



export default class AllFarms extends Component {
    state = {
        AllFarms: []
    }

    componentDidMount(){
        axios.get('/api/v1/farm')
        .then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
