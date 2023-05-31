import React, { Component } from 'react'
import Hero from './img/Hero.png'
import Container from 'react-bootstrap/Container';
export class Section1 extends Component {
    render() {
        return (

            <div className=" continer bg-image" style={{
                height: 526,
                width: 'auto'

            }} >
                <img src={Hero} className="w-100" />
                <Container>
                    <div className="" style={{ marginTop: -400 }}>
                        <h4 style={{
                            fontSize: 68, width: 599
                            , color: 'black', backgroundColor: 'pink', textDecoration: 'underline overline'
                        }}>VINCENT’S SPHERE</h4>
                        <p className="m-0" style={{
                            width: 599,
                            marginLeft: -100,
                            fontSize: 32,
                      
                            color: 'black'
                        }}>HANDICRAFTED HAPPINESS FOR ALL</p>
                        <button style={{marginRight:1050 , borderRadius:0,paddingLeft:46,paddingRight:46}} className="btn btn-dark text " >
                            EXPLORE
                        </button>
                    </div>

                </Container>
            </div>


        )
    }
}

export default Section1