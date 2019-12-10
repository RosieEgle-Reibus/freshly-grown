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
                            <div className="single-product-inner">
                                <div className="single-product-front">
                                    <img src={product.product_pic_url} />
                                    <div className="single-front-container">
                                        <Link to={`/product/${product.id}`}>
                                            <h1>{product.name}</h1>
                                        </Link>
                                        <h2>${product.price} / {product.unit}</h2>
                                    </div>
                                </div>
                                <div className="single-product-back">
                                    <h1>{product.name}</h1>
                                    <p>{product.description}</p>
                                    <h3>${product.price} / {product.unit}</h3>
                                    <button><Link to={`/product/${product.id}`}>
                                        BUY NOW
                        </Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
