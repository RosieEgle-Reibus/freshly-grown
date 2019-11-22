import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
      </div>
      <Switch>
        <Route exact path='/' component={AllFarms}/>

      </Switch>
      </Router>
    )
  }
}

