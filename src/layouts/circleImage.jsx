import React, { Component } from 'react';
import imageurl from '../resource/image/icons/tree.png';
class CircleImage extends Component {

    render() {
        // let imagecli = this.props.imagecli;
        const ellipseX = 18 + parseInt(this.props.x);
        const ellipseY = 11 + parseInt(this.props.y);
        const backgroungColor = this.props.color;
        const imageX = 14.5 + parseInt(this.props.imageX);
        const imageY = 8.4 + parseInt(this.props.imageY);
        const id = "circleView" + ellipseX;
        const dotY = ellipseY + 9;
        const textY = ellipseY + 13;
        const dotFill = this.props.dotFill;
        let dotStroke = "none";
        if (dotFill === "#FFF") {
            dotStroke = "#817f82";
        }
        return (
            <React.Fragment>
                <defs>
                    <clipPath id={id}>
                        <ellipse cx={ellipseX} cy={ellipseY} rx="3" ry="6" fill={backgroungColor} />
                    </clipPath>
                </defs>
                <ellipse cx={ellipseX} cy={ellipseY} rx="3" ry="6" fill={backgroungColor} />
                <image href={this.props.imagecli} x={imageX} y={imageY} height="5px" width="7px" clipPath="url(#{id})" />
                <ellipse cx={ellipseX} cy={dotY} rx="0.5" ry="1" fill={dotFill} stroke={dotStroke} strokeWidth="0.1" />
                <text x={ellipseX - 4} y={textY}>{this.props.textContent}</text>
            </React.Fragment>
        )
    }

}


export default CircleImage;