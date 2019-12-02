import React, { Component } from 'react'
import '../All-List.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class AllFarms extends Component {
    state = {
        allFarms: [],

    }
    componentDidMount() {
        axios.get('/api/v1/farm')
            .then((res) => {
                console.log(res.data)

                this.setState({ allFarms: res.data })
            })
    }
    refreshAllFarmsComponent = () => {
        axios.get('/api/v1/farm')
            .then((res) => {
                console.log(res.data)
                this.setState({ allFarms: res.data })
            })
    }
    render() {
        return (
            <div className="all-list">
                <div className="all-title-container">
                    <h1 className="all-title">Our Farms</h1>
                </div>
            <div className="all-button-container">
                {this.state.allFarms.map((farm) => {
                    return (
                        <div className="all-list-div">
                                <div className="all-button-border">
                                <button className="all-button">
                                    <Link to={`/farm/${farm.id}`}>
                                        <h1>{farm.name}</h1>
                                    </Link>
                                </button>
                            </div>
                            </div>
                       
                       
                    )
                })}
            </div>
            <div className="add-button-container">
            <button className="add-button"><Link to='/farm/new'><h2>Add Your Farm</h2></Link></button>
            </div>
            </div >
        )
    }
}
