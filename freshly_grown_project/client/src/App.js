import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    allFarms: [],
    productList: []
  }
  componentDidMount(){
      axios.get('/api/v1/farm')
      .then((res) => {
          console.log(res.data)
          const allFarms = res.data
          this.setState({allFarms: allFarms}) 
          
      })
  }

  getProducts = () => {
    {this.state.allFarms.map((farm) => {
      let productList = []
      productList = farm.products
      this.setState({productList: productList })
      return(
        <div>
          {this.state.productList}
          </div>
      )
    })}
  }

  productMapTry = (products) => {
    {products.map((product) => {
      console.log(product.name, product.description)
      return (product.name, product.description)
      
    })}
  }

  render() {
    return (
      <Router>
      <div>
        {this.state.allFarms.map((farm) =>{
          return(
            <div>
            <Link to={`/farm/${farm.id}`}>
              <h1>{farm.name}</h1> 
            </Link>
            <h2>{this.productMapTry(farm.products)}</h2>
            </div>
          )
        })}
  
      </div>
      <Switch>
        {/* <Route exact path='/' component={AllFarms}/> */}

      </Switch>
      </Router>
    )
  }
}

