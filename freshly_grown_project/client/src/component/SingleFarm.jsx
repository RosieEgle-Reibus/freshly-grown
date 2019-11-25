import React, { Component } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'

export default class SingleFarm extends Component {
    state = {
        name: '',
        description: '',
        location: '',
        farm_pic_url: '',
        products: [],
        changeFarm: {
            farmId: '',
            name: '',
            description: '',
            location: '',
            farm_pic_url: '',
            products: [],
        }
    }
    componentDidMount() {
        const farmId = this.props.match.params.farmId
        axios.get(`/api/v1/farm/${farmId}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
            })
    }

    refreshSingleFarm = () => {
        const farmId = this.props.match.params.farmId
        axios.get(`/api/v1/farm/${farmId}`)
        .then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
    }
    changeSingleFarm = (event) => {
        event.preventDefault()
        const farmId = this.props.match.params.farmId
        axios.put(`/api/v1/farm/${farmId}/`, this.state.changeFarm)
        .then(() => {
            this.refreshSingleFarm()
        })
    }

    onChangeFarmForm = (event) => {
        const previousState = { ...this.state.changeFarm }
        previousState[event.target.name] = event.target.value
        this.setState({changeFarm: previousState})
    }
    render() {
        return (
            <div>
                <form >
                <input
                        type="string"
                        placeholder={this.state.name}
                        id="name"
                        value={this.state.changeFarm.name}
                        name="name"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder={this.state.description}
                        id="description"
                        value={this.state.changeFarm.description}
                        name="description"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder={this.state.location}
                        id="location"
                        value={this.state.changeFarm.location}
                        name="location"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="string"
                        placeholder={this.state.farm_pic_url}
                        id="picture"
                        value={this.state.changeFarm.farm_pic_url}
                        name="farm_pic_url"
                        onChange={this.onChangeFarmForm}
                    />
                    <input
                        type="submit"
                        value="Save Changes"
                        onClick={this.changeSingleFarm}
                    />

                </form>
                <h1>{this.state.name}</h1>
                <h1>{this.state.description}</h1>
                <h2>{this.state.location}</h2>
                <img src={this.state.farm_pic_url} width="200"/>
                <SingleProduct
                        farm={this.state}
                    />
               

            </div>
        )
    }
}
