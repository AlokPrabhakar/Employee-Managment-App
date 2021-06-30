import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer my-3 fixed-bottom " style={{background:"black" }}>
                    <div className="text-light text-center">All Rights Reserved 2020 @AAAAlok</div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;