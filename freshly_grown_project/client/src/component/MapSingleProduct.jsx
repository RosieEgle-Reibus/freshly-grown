import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class MapSingleProduct extends Component {


    render() {
        const {
            farm,
        } = this.props

        return (
            <div className="all-products-container">
                {farm.products.map((product) => {
                    return (
                        <div className="single-product-container">
                        <div className="single-product-divide">
                        <Link to={`/product/${product.id}`}>
                        <h1>{product.name}</h1>
                        </Link>
                        <h2>{product.description}</h2>
                        </div>
                        </div>
                )
                })}
            </div>
        )
    }
}
