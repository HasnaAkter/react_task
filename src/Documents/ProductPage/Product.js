import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Cup1 from './img/Cup1.png'
import { FaStar } from 'react-icons/fa';

export class Product extends Component {
  render() {
    return (
      <Container>




        <div className="card mb-3" style={{ marginTop: 64, border: 'none', textAlign: 'left' }}>
          <div className="row g-0">
            <div className="col-md-6" >
              <img src={Cup1} className="img-fluid rounded-start" alt="..." />
              <h3 style={{ marginTop: 20 }}>Share this item</h3>
            </div>
            <div className="col-md-6" style={{ marginLeft: -200 }}>
              <div className="card-body">
                <h5 className="card-title">May The Force Be With You</h5>
                <p >Size: 9oz</p>

                <div className="height-100 container d-flex  " >


                  <div className="d-flex justify-content-between ">
                    <div className="ratings" >
                      <FaStar/> <FaStar/> <FaStar/> <FaStar/>  <FaStar/>
                    </div>
                    <h5 className="review-count" style={{marginLeft:20}}>22 Reviews</h5>
                  </div>



                </div>
                <p >Notes: Spring Flowers, Natural Patchouli & White Cedar</p>
                <p ><small>Category: Scented Candles
                  Sub Category: Star Wars Special</small></p>
                <p ><small>In Stock</small></p>
                <p >Price: BDT.850</p>

                <div className="mt-4">
                  <button className="btn btn-dark text " >
                    ADD TO CART
                  </button> <span> <button className="btn btn-dark text " >
                    ADD TO WISHLIST
                  </button></span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    )
  }
}

export default Product