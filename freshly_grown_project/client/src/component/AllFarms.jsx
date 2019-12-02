import React, { Component } from 'react'
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
            
                this.setState({ allFarms: res.data})
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
                <h1>Our Farms</h1>
               <div className="all-list-conatianer">
                {this.state.allFarms.map((farm) => {
                    return (
                        <div className="all-item">
                            <button>
                            <Link to={`/farm/${farm.id}`}>
                                <h1>{farm.name}</h1>
                            </Link>
                            </button>
                            </div>
                        
                    )
                })}
                </div>
                <button><Link to='/farm/new'>Add Your Farm</Link></button>
            </div>
        )
    }
}
