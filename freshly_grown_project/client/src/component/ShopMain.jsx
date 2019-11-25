import React, { Component } from 'react'
import SingleProduct from './SingleProduct.jsx'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ShopMain extends Component {
    state = {
        allFarms: [],
        
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
            <div>
                 {this.state.allFarms.map((farm) => {
            return (
              <div className="App">
                <Link to={`/farm/${farm.id}`}>
                  <h1>{farm.name}</h1>
                </Link>
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
        )
    }
}
