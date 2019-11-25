import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class AllFarms extends Component {
    state = {
        allFarms: [],
        newFarm: {
        name: '',
        description: '',
        location: '',
        farm_pic_url: ''
        }
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
    createNewFarm = (event) => {
        event.preventDefault()
        axios.post('/api/v1/farm/', this.state.newFarm)
            .then(() => {
                this.refreshAllFarmsComponent()
            })
    }
    onChangeFarmForm = (event) => {
        const previousState = { ...this.state.newFarm }
        previousState[event.target.name] = event.target.value
        this.setState({newFarm: previousState})
    }



    render() {
        return (
            <div>
                <form>
                    <input
                        type="string"
                        placeholder="Farm Name"
                        id="name"
                        value={this.state.newFarm.name}
                        name="name"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder="Description"
                        id="description"
                        value={this.state.newFarm.description}
                        name="description"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder="Location"
                        id="location"
                        value={this.state.newFarm.location}
                        name="location"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder="Picture URL"
                        id="picture"
                        value={this.state.newFarm.farm_pic_url}
                        name="farm_pic_url"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="submit"
                        value="Add New Farm"
                        onClick={this.createNewFarm}
                    />
                </form>
                {this.state.allFarms.map((farm) => {
                    return (
                        <div className="App">
                            <Link to={`/farm/${farm.id}`}>
                                <h1>{farm.name}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
