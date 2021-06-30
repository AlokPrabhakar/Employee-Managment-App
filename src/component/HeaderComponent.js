import React, { Component } from 'react'
import {
    Card, CardBody
  } from 'reactstrap';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    
                    <Card className="my-3 bg-secondary">
                        <CardBody>
                            <h1 className="text-center text-light mt-3">Welcome to Employee Application</h1>
                        </CardBody>
                    </Card>
                
                </header>
            </div>
        )
    }
}

export default HeaderComponent