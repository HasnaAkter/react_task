import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BANNER from './img/BANNER.png';
import BANNER2 from './img/BANNER2.png';


export class HandicraftedGift extends Component {
  render() {
    return (
      <Container>

        <div style={{ marginTop: 30 }}>
          <h2>Handicrafted Scented Candles</h2>
        </div>
        <div>
          <p >With over hundreds of fragrances to choose from</p>
        </div>
        <div className="row" style={{marginTop:40}} >

          <div className="col-md-6 effect" >

            <img src={BANNER} alt="test" className="img-responsive" />
            <div className="carousel slide">
              <div className="carousel-caption" >
                <h1  style={{  textAlign: 'left',marginTop:-230 }} >Women’s Day Special Gift Box
                </h1>

              </div>
            </div>

          </div>

          <div className="col-md-6 effect" >

            <img src={BANNER2} alt="test" className="img-responsive" />
            <div className="carousel slide">
              <div className="carousel-caption" >
                <h1  style={{  textAlign: 'left',marginTop:-230 }}>Women’s Day Special Gift Box
                </h1>

              </div>
            </div>

          </div>

        </div>



      </Container>
    )
  }
}

export default HandicraftedGift