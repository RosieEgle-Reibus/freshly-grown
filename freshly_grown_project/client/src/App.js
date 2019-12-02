import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'
import axios from 'axios'
import React, { Component } from 'react'
import ShopMain from './component/ShopMain.jsx'
import SingleFarm from './component/SingleFarm'
import SingleProductPage from './component/SingleProductPage'
import AllRestaurants from './component/AllRestaurants'
import CreateRestaurantForm from './component/CreateRestaurantForm'
import SingleRestaurant from './component/SingleRestaurant'
import EditRestaurantForm from './component/EditRestaurantForm'
import InPerson from './component/InPerson'
import EditFarmForm from './component/EditFarmForm'
import CreateFarmForm from './component/CreateFarmForm'



export default class App extends Component {
  state = {
    allFarms: [],
    showMenu: false

  }
  componentDidMount() {
    axios.get('/api/v1/farm')
      .then((res) => {
        console.log(res.data)
        const allFarms = res.data
        this.setState({ allFarms: allFarms })
      })
  }

  showMenu = (event) => {
    event.preventDefault()
    this.setState({showMenu: true}
    )
  }

   closeMenu = () => {
     
     this.setState({showMenu: false}
     )
   }

  render() {
    return (
      <Router>

        <div className="App">
          <header>
            <div className="title-container">
              <div className="header-title-container">
              <h1 className="header-title">Freshly</h1>
              <h1 className="header-title">Grown</h1>
            </div>
            </div>
            <div className="bg-image-container">
            <div  className='bg-image'>
              
            </div>
            </div>
            <div className="drop-contianer"onMouseEnter={this.showMenu} onMouseLeave={this.closeMenu}>
              <div className="navbar">
              <button className="drop-menu-button" >Menu</button>
              {this.state.showMenu ?
            <div className="drop-content">
              <Link to={`/`}>
                <h3>Home</h3>
              </Link>
              <Link to={`/farm`}>
                <h3>Farms</h3>
              </Link>
              <Link to={'/restaurant'}><h3>Restaurants</h3></Link>
              <Link to={'/markets'}><h3>Markets</h3></Link>
            </div> :  null }
            </div>
            </div>
          </header>

       {/* <div className="parallax">It's a paradox parallax</div>
         <div className="experiment">ExperimentYAAY</div>

         <div className="parallax"></div>  */}

        </div>
        <Switch>

          <Route exact path='/' component={ShopMain} />
          <Route exact path='/farm' component={AllFarms} />
          <Route exact path='/farm/new' component={CreateFarmForm} />
          <Route exact path="/farm/:farmId" component={SingleFarm} />
          <Route exact path="/product/:productId" component={SingleProductPage} />
          <Route exact path='/restaurant' component={AllRestaurants} />
          <Route exact path='/restaurant/new' component={CreateRestaurantForm} />
          <Route exact path='/restaurant/:restaurantId' component={SingleRestaurant} />
          <Route exact path='/restaurant/edit/:restaurantId' component={EditRestaurantForm} />
          <Route exact path='/markets' component={InPerson} />
          <Route exact path='/farm/edit/:farmId' component={EditFarmForm} />


        </Switch>
      </Router>
    )
  }
}

