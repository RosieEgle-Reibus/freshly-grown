import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'
import axios from 'axios'
import React, { Component } from 'react'
import ShopMain from './component/ShopMain.jsx'


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
          <Link to={`/farms`}>
            <h1>Farms</h1>
          </Link>
          <Link to={`/`}>
            <h1>Home</h1>
          </Link>
          

        </div>
        <Switch>
          <Link>
            <Route exact path='/' component={ShopMain} />
            <Route exact path='/farms' component={AllFarms} />

          </Link>

        </Switch>
      </Router>
    )
  }
}

