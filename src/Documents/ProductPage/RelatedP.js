import React, { Component } from 'react'
import Cup1 from './img/Cup1.png'
import Cup2 from './img/Cup2.png'
import Cup3 from './img/Cup3.png'
import Cup4 from './img/Cup4.png'
import { Container } from 'react-bootstrap'
import { FaShareAlt,FaHeart } from 'react-icons/fa';

export class RelatedP extends Component {
    render() {
        return (
            <Container>
                <div style={{ marginTop: 50, textAlign: 'left' }}>
                    <h2>Related Products</h2>
                </div>





                <div className="row pb-5 mb-4 " style={{ textAlign: 'left', marginTop: 20 }}>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0">
                                <img src={Cup1} alt="" className="w-100 card-img-top" />
                                <div className="p-4">
                                    <p style={{ color: 'red' }}>STAR WARS SPECIAL</p>
                                    <h5 className="mb-0" >May the Force be with you</h5>
                                    <p className="small text-muted">9oz</p>
                                    <ul className="social mb-0 list-inline mt-3">
                                    <FaHeart />
                                        <span className="rating-number" style={{marginLeft:20}}> <FaShareAlt /></span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0">
                                <img src={Cup2} alt="" className="w-100 card-img-top" />
                                <div className="p-4">
                                    <p style={{ color: 'red' }}>STAR WARS SPECIAL</p>
                                    <h5 className="mb-0" >May the Force be with you</h5>
                                    <p className="small text-muted">9oz</p>
                                    <ul className="social mb-0 list-inline mt-3">
                                    <FaHeart />
                                        <span className="rating-number" style={{marginLeft:20}}> <FaShareAlt /></span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0">
                                <img src={Cup3} alt="" className="w-100 card-img-top" />
                                <div className="p-4">
                                    <p style={{ color: 'red' }}>STAR WARS SPECIAL</p>
                                    <h5 className="mb-0" >May the Force be with you</h5>
                                    <p className="small text-muted">9oz</p>
                                    <ul className="social mb-0 list-inline mt-3">
                                    <FaHeart />
                                        <span className="rating-number" style={{marginLeft:20}}> <FaShareAlt /></span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">

                        <div className="card shadow-sm border-0 rounded">
                            <div className="card-body p-0">
                                <img src={Cup4} alt="" className="w-100 card-img-top" />
                                <div className="p-4">
                                    <p style={{ color: 'red' }}>STAR WARS SPECIAL</p>
                                    <h5 className="mb-0" >May the Force be with you</h5>
                                    <p className="small text-muted">9oz</p>
                                    <ul className="social mb-0 list-inline mt-3">
                                    <FaHeart />
                                        <span className="rating-number" style={{marginLeft:20}}> <FaShareAlt /></span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </Container>
        )
    }
}

export default RelatedP