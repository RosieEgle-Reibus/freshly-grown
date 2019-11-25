import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'
import axios from 'axios'
import React, { Component } from 'react'
import ShopMain from './component/ShopMain.jsx'
import SingleFarm from './component/SingleFarm'
import SingleProductPage from './component/SingleProductPage'
import AllRestaurants from './component/AllRestaurants'


export default class App extends Component {
  state = {
    allFarms: [],
    productList: []
  }
  componentDidMount() {
    axios.get('/api/v1/farm')
      .then((res) => {
        console.log(res.data)
        const allFarms = res.data
        this.setState({ allFarms: allFarms })

      })
  }


  render() {
    return (
      <Router>

        <div className="App">
          <h1>Freshly Grown</h1>
          <Link to={`/farm`}>
            <h3>Farms</h3>
          </Link>
          <Link to={`/`}>
            <h3>Home</h3>
          </Link>
          <Link to={'/restaurant'}>Restaurants</Link>



        </div>
        <Switch>

          <Route exact path='/' component={ShopMain} />
          <Route exact path='/farm' component={AllFarms} />
          <Route exact path="/farm/:farmId" component={SingleFarm} />
          <Route exact path="/product/:productId" component={SingleProductPage} />
          <Route exact path='/restaurant' component={AllRestaurants} />



        </Switch>
      </Router>
    )
  }
}

