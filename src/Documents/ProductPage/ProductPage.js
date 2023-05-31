import React, { Component } from 'react'
import Product from './Product'
import Summary from './Summary'
import RelatedP from './RelatedP'


export class ProductPage extends Component {
    render() {
        return (
            <div className='ProductPage'>
                <Product></Product>
                <Summary></Summary>
                <RelatedP></RelatedP>


            </div>
        )
    }
}

export default ProductPage