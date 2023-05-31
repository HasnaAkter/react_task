import React, { Component } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
export class Footerr extends Component {
    render() {
        return (


            <footer className="footer" style={{ marginTop: 100, background: 'WhiteSmoke' }}>
                <div className="container bottom_border" >
                    <div className="row  ">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col mt-4">
                            <h5 className="headin5_amrc col_white_amrc pt2" >VINCENT’S SPHERE</h5>
                            <div style={{textAlign:'left',marginLeft:65}}>
                                <p className="mb10" >Flat A5, 4/11 Humayun Road,
                                    Mohammadpur, Dhaka 1207</p>

                                <p > < FaPhone />  0182-8398225 </p>
                                <p >< FaEnvelope />  info@thinkcrypt.io  </p></div>


                        </div>


                        <div className=" col-sm-4 col-md  col-6 col mt-4">
                            <h5 className="headin5_amrc col_white_amrc pt2" >Navigation</h5>

                            <ul className="footer_ul_amrc" style={{ marginLeft: -90 }}>
                                <p>Home</p>
                                <p>About</p>
                                <p>About</p>

                            </ul>

                        </div>


                        <div className=" col-sm-4 col-md  col-6 col mt-4">
                            <h5 className="headin5_amrc col_white_amrc pt2 " >Legal</h5>

                            <ul className="footer_ul_amrc" style={{ marginLeft: 95, textAlign: 'left' }}>
                                <p>Privacy Popcy</p>
                                <p>Terms of Service </p>
                                <p>Return Popcy</p>

                            </ul>

                        </div>


                        <div className=" col-sm-4 col-md  col-12 col mt-4">
                            <h5 className="headin5_amrc col_white_amrc pt2"  >Social</h5>


                            <ul className="footer_ul2_amrc" style={{ marginLeft: -30 }} >
                                < FaFacebook />  <span style={{ marginLeft: 10 }}>< FaInstagramSquare /> </span>

                            </ul>

                        </div>
                    </div>
                </div>



                <div className=" kipmanjaro_bottom_header_one section_padding_50 text-center bg-dark">
                    <div className="container" >
                        <div className="row">
                            <div className="col-12 mt-4">
                                <p style={{ color: 'white' }}  >Copyright © 2021, Vincent’s Sphere | All rights reserved | Powered by <span style={{ color: 'red' }} >thinkcrypt.io</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        )
    }
}

export default Footerr