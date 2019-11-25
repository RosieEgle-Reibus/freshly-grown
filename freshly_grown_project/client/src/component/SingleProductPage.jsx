import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class SingleProductPage extends Component {
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
        },
        redirect: false

    }

    componentDidMount() {
        const productId = this.props.match.params.productId
        axios.get(`/api/v1/product/${productId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({changeProduct: res.data})
            })
    }
    refreshSingleProductPage = () => {
        const productId = this.props.match.params.productId
        axios.get(`/api/v1/product/${productId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({changeProduct: res.data})
            })
    }
    editSingleProduct = (event) => {
        event.preventDefault()
        const productId = this.props.match.params.productId
        axios.put(`/api/v1/product/${productId}/`, this.state.changeProduct)
            .then(() => {
                this.refreshSingleProductPage()
            })
    }

    onChangeProductForm = (event) => {
        const previousState = { ...this.state.changeProduct }
        previousState[event.target.name] = event.target.value
        this.setState({ changeProduct: previousState })
    }
    onProductDeleteClick = () => {
        const productId = this.props.match.params.productId
        axios.delete(`/api/v1/product/${productId}`)
        .then(() => {
            this.setState({redirect: true})
        })
    } 
    render() {
        if (this.state.redirect === true)  {
            return <Redirect to="/farm" />
        }
        return (
            <div>
            <h1>{this.state.changeProduct.name}</h1>
            <h2>{this.state.changeProduct.description}</h2>
            <button onClick={() => this.onProductDeleteClick()}>Delete Product</button>
            <form>
                <input
                        type="string"
                        placeholder="Product Name"
                        id="name"
                        value={this.state.changeProduct.name}
                        name="name"
                        onChange={this.onChangeProductForm}
                    /> 
                <input
                        type="string"
                        placeholder="Description"
                        id="description"
                        value={this.state.changeProduct.description}
                        name="description"
                        onChange={this.onChangeProductForm}
                    /> 
                <input
                        type="string"
                        placeholder="Price"
                        id="price"
                        value={this.state.changeProduct.price}
                        name="price"
                        onChange={this.onChangeProductForm}
                    />
                <input
                        type="string"
                        placeholder="Units"
                        id="unit"
                        value={this.state.changeProduct.unit}
                        name="unit"
                        onChange={this.onChangeProductForm}
                    /> 
                <input
                        type="string"
                        placeholder="Total Quantity"
                        id="totalQuantity"
                        value={this.state.changeProduct.total_quantity}
                        name="total_quantity"
                        onChange={this.onChangeProductForm}
                    /> 
                <input
                        type="string"
                        placeholder="Product Pic Url"
                        id="productPicUrl"
                        value={this.state.changeProduct.product_pic_url}
                        name="product_pic_url"
                        onChange={this.onChangeProductForm}
                    />
                <input
                        type="string"
                        placeholder="Tag"
                        id="tag"
                        value={this.state.changeProduct.tag}
                        name="tag"
                        onChange={this.onChangeProductForm}
                    />
                <input
                        type="submit"
                        value="Save Changes"
                        onClick={this.editSingleProduct}
                    />
                </form>

            </div>
        )
    }
}
