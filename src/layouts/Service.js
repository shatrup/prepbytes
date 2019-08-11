import React, { Component } from 'react';

class Service extends Component {
    state = {}

    render() {
        return (
            <div style={{ flex: 1 }}>

                <center><i><img src={require(`../resource/image/icons/${this.props.imageName}`)} alt="image1" width="50" /></i></center>
                <center><span style={{ fontSize: 20, fontWeight: "bold" }}>{this.props.textTitle}</span></center>
            </div>


        );
    }
}

export default Service;