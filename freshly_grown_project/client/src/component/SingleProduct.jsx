import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class SingleProduct extends Component {
    state = {
        changeProduct: {
            productId: '',
            name: '',
            description: '',
            price: '',
            unit: '',
            total_quantity: '',
            order_quantity: '',
            product_pic_url: '',
            tag: '',
            farm: ''

        }
    }
    editSingleProduct = (event) => {
        event.preventDefault()
        const { refreshSingleFarm } = this.props
        const { productId } = this.state.changeProduct
        axios.put(`/api/v1/product/${productId}`, this.state.changeProduct)
        .then(() => {
            refreshSingleFarm()
        })
    }

    onChangeProductForm = (event) => {
        const previousState = { ...this.state.changeProduct }
        previousState[event.target.name] = event.target.value
        this.setState({changeProduct: previousState})
    }

    render() {
        const {
            farm,
        } = this.props

        return (
            <div className="single-product">
                {farm.products.map((product) => {
                    return (
                        <div>
                        <Link to={`/product/${product.id}`}>
                        <h1>{product.name}</h1>
                        </Link>
                        <h2>{product.description}</h2>
                        </div>
               
                )
                })}
            </div>
        )
    }
}
