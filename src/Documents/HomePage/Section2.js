import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Frame from './img/Frame.png'

export class Section2 extends Component {
    render() {
        return (

            <Container>

                <div className="row " style={{marginTop:250}}>

                    <div className="col-lg-4 col-sm-6">
                        <div className="lc-block ratio ratio-1x1">
                            <img style={{height: 450}} src={Frame} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="lc-block ">
                            <div editable="rich">
                                <hr
                                    style={{
                                        color: 'pink',
                                        backgroundColor: 'pink',
                                        marginTop: -3 ,
                                        height: 5
                                    }}
                                />
                                <h2 className="rfs-25" style={{ marginTop: -14,textAlign: 'left' }}>The Story of Vincent’s
                                    Sphere</h2>
                            </div>
                        </div>
                        <div className="lc-block ">
                            <div editable="rich" style={{ marginTop: 20,  fontSize: 14, textAlign: 'left', }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum, illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. </p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sit amet, consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                    reprehenderit qui in ea voluptate velit esse quam illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        </div>
                        <div className="lc-block"  >
                        <button style={{marginRight:1190 , borderRadius:0,paddingLeft:46,paddingRight:46}} className="btn btn-dark text " >
                            EXPLORE
                        </button>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Section2