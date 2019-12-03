import React, { Component } from 'react'
import MapSingleProduct from './MapSingleProduct.jsx'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ShopMain extends Component {
    state = {
        allFarms: [],
        changeProduct: {
            name: '',
            description: '',
            price: '',
            unit: '',
            total_quantity: '',
            product_pic_url: '',
            tag: '',
            farm: this.props.match.params.farmId
        } 
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
            <div className="store-container">
                
                <div className="parallax"></div>


                 {this.state.allFarms.map((farm) => {
            return (
              <div className="farm-map-container">
                <div className="farm-name-container">
                <div className="button-outline">
                <button className="anim-button">
                  <Link to={`/farm/${farm.id}`}>
                  <h1>{farm.name}</h1>
                </Link>
                </button>
                </div>
                <hr></hr>
                </div>
                <MapSingleProduct
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

<div className="parallax"></div>

            </div>
        )
    }
}
