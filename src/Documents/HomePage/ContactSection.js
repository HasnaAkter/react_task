import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class ContactSection extends Component {
    render() {
        return (
            <Container>

                <div className="row" style={{ marginTop: 80 }}>
                    <div className="col-xs-12 candy">
                        <h1 >Can’t Decide which one to get?</h1>
                        <p  >Let us help you choose the best products  for you
                            and your loved one.</p>
                        <div className="text-center"  >
                            <button className="btn btn-dark text " >
                                GET FREE CONSULTATION
                            </button>
                        </div>
                    </div>

                </div>

            </Container>
        )
    }
}

export default ContactSection