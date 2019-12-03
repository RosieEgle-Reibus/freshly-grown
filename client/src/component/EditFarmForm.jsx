import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class EditFarmForm extends Component {
    state = {
        changeFarm: {
            farmId: '',
            name: '',
            description: '',
            location: '',
            farm_pic_url: '',
            products: [],
        },
        redirect: false,
    }
    componentDidMount() {
        const farmId = this.props.match.params.farmId
        axios.get(`/api/v1/farm/${farmId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({changeFarm: res.data})
            })
    }
    onChangeFarmForm = (event) => {
        const previousState = { ...this.state.changeFarm }
        previousState[event.target.name] = event.target.value
        this.setState({changeFarm: previousState})
    }
    changeSingleFarm = (event) => {
        event.preventDefault()
        const farmId = this.props.match.params.farmId
        axios.put(`/api/v1/farm/${farmId}/`, this.state.changeFarm)
        .then(() => {
            this.setState({redirect: true})
        })
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to={`/farm/${this.props.match.params.farmId}`}/>
        }
        return (
            <div className="form-div">
                 <h1 className="all-title">Update Farm Info</h1>
                 <div className="form-container">
                <form >
                <div className="input-container">
                <label for="name" className="form-label">Farm Name</label>
                <input
                        type="string"
                        placeholder={this.state.name}
                        id="name"
                        value={this.state.changeFarm.name}
                        name="name"
                        onChange={this.onChangeFarmForm}
                    />
                    </div>
                    <div className="input-container">
                    <label for="description" className="form-label">Description of Farm</label>
                    <input
                        type="string"
                        placeholder={this.state.description}
                        id="description"
                        value={this.state.changeFarm.description}
                        name="description"
                        onChange={this.onChangeFarmForm}
                    />
                    </div>
                    <div className="input-container">
                    <label for="location" className="form-label">Location</label> 
                    <input
                        type="string"
                        placeholder={this.state.location}
                        id="location"
                        value={this.state.changeFarm.location}
                        name="location"
                        onChange={this.onChangeFarmForm}
                    />
                    </div>
                    <div className="input-container">
                    <label for="picture" className="form-label">Farm Picture URL</label> 
                    <input
                        type="string"
                        placeholder={this.state.farm_pic_url}
                        id="picture"
                        value={this.state.changeFarm.farm_pic_url}
                        name="farm_pic_url"
                        onChange={this.onChangeFarmForm}
                    />
                    </div>
                    <input
                        type="submit"
                        value="Save Changes"
                        onClick={this.changeSingleFarm}
                    />
                </form>
                </div>  
            </div>
        )
    }
}
