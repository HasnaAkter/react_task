import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class FeaturedSection extends Component {
    render() {
        return (


            <div>
                <Container>

                    <div className='row' style={{ marginTop: 100 }}> <div className='col-lg-5 '> <hr
                        style={{
                            color: 'gray',

                            backgroundColor: 'gray',
                            height: 5
                        }}

                    />
                    </div>
                        <div className='col-lg-2 '><h2>FEATURED</h2></div>
                        <div className='col-lg-5 '><hr
                            style={{
                                color: 'gray',

                                backgroundColor: 'gray',
                                height: 5
                            }}

                        /></div></div>



                </Container>
            </div>


        )
    }
}

export default FeaturedSection