import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import AllFarms from './component/AllFarms'
import axios from 'axios'
import React, { Component } from 'react'
import SingleProduct from './component/SingleProduct.jsx'

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

  //Attempt to make products appear in state
  getProducts = () => {
    {
      this.state.allFarms.map((farm) => {
        let productList = []
        productList = farm.products
        this.setState({ productList: productList })
        return (
          <div>
            {this.state.productList}
          </div>
        )
      })
    }
  }

  //Mapping through products that belong to farm
  productMapTry = (products) => {
    {
      products.map((product) => {
        console.log(product.name, product.description)
        const name = product.name
        return ( name
        // <h1>{product.name}</h1>
      //   <SingleProduct
      //     productId = {product.id}
      //     name = {product.name}
      //     description = {product.description}
      //     price = {product.price}
      //     unit = {product.unit}
      //     total_quantity = {product.total_quantity}
      //     order_quantity = {product.order_quantity}
      //     product_pic_url = {product.product_pic_url}
      //     tag = {product.tag}
      // />
      )
      })
    }
  }



  render() {
    return (
      <Router>
        <div>
          {this.state.allFarms.map((farm) => {
            return (
              <div className="App">
                <Link to={`/farm/${farm.id}`}>
                  <h1>{farm.name}</h1>
                </Link>
                
                {/* <div>{this.productMapTry(farm.products)}</div> */}
                <SingleProduct
                    farm={farm}
                    productId={farm.products.id}
                    name = {farm.products.name}
                    description = {farm.products.description}
                    price = {farm.products.price}
                    unit = {farm.products.unit}
                    total_quantity = {farm.products.total_quantity}
                    order_quantity = {farm.products.order_quantity}
                    product_pic_url = {farm.products.product_pic_url}
                    tag = {farm.products.tag}
                />
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

