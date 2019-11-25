import React, { Component } from 'react'

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
            tag: ''
        }
    }
    render() {
        const {
            farm,
            productId,
            name,
            description,
            price,
            unit,
            total_quantity,
            order_quantity,
            product_pic_url,
            tag
        } = this.props

        console.log({name})
        return (
            <div className="single-product">
                {farm.products.map((product) => {
                    return (
                        <h1>{product.name}</h1>
                    )
                })}
            </div>
        )
    }
}
