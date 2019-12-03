import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom' 

export default class CreateFarmForm extends Component {
    state = {
        newFarm: {
        name: '',
        description: '',
        location: '',
        farm_pic_url: ''
        },
        redirect: false
    }
    createNewFarm = (event) => {
        event.preventDefault()
        axios.post('/api/v1/farm/', this.state.newFarm)
            .then(() => {
                this.setState({redirect: true})
            })
    }
    onChangeFarmForm = (event) => {
        const previousState = { ...this.state.newFarm }
        previousState[event.target.name] = event.target.value
        this.setState({newFarm: previousState})
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/farm'/>
        }
        return (
            <div className="form-div">
                <h1 className="all-title">Create New Farm</h1>
            <div className="form-container">
                   <form>
                   <div className="input-container">
                   <label for="name" className="form-label">Farm Name</label>
                    <input
                        type="string"
                        placeholder="Farm Name"
                        id="name"
                        value={this.state.newFarm.name}
                        name="name"
                        onChange={this.onChangeFarmForm}
                    />
                    </div> 
                    <div className="input-container">
                    <label for="description" className="form-label">Description of Farm</label>
                    <input
                        type="string"
                        placeholder="Description"
                        id="description"
                        value={this.state.newFarm.description}
                        name="description"
                        onChange={this.onChangeFarmForm}
                    />
                    </div> 
                    <div className="input-container">
                    <label for="location" className="form-label">Location</label>
                    <input
                        type="string"
                        placeholder="Location"
                        id="location"
                        value={this.state.newFarm.location}
                        name="location"
                        onChange={this.onChangeFarmForm}
                    />
                    </div> 
                    <div className="input-container"> 
                    <label for="picture" className="form-label">Farm Picture URL</label>  
                    <input
                        type="string"
                        placeholder="Picture URL"
                        id="picture"
                        value={this.state.newFarm.farm_pic_url}
                        name="farm_pic_url"
                        onChange={this.onChangeFarmForm}
                    />
                    </div>
                
                    <input
                        type="submit"
                        value="Add New Farm"
                        onClick={this.createNewFarm}
                    />
                    
                </form>
                
            </div>
            </div>
        )
    }
}
