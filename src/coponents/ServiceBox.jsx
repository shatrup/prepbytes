import React, { Component } from 'react';
import start from '../resource/image/icons/start.png';
import finish from '../resource/image/icons/finish.png';
import CircleImage from '../layouts/circleImage';
import image1 from '../resource/image/icons/image.png';

import image2 from '../resource/image/icons/tree.png';

class ServiceBox extends Component {
    constructor() {
        super()
        this.state = {
            imgurl1: 'image1',
            imgurl2: 'E:/prebytes/prebytes/src/resource/image/icons/tree.png'
        };
    }

    render() {


        return (
            <React.Fragment>
                <div className="service">
                    {/* <Service textTitle={textTitle1} imageName={imageName1}></Service>
                    <Service textTitle={textTitle2} imageName={imageName2}></Service>
                    <Service textTitle={textTitle3} imageName={imageName3}></Service>
                    <Service textTitle={textTitle4} imageName={imageName4}></Service>
                    <Service textTitle={textTitle5} imageName={imageName5}></Service>
                    <Service textTitle={textTitle6} imageName={imageName6}></Service> */}
                    <div className="svg-container">
                        <svg width="100%" height="100%" viewBox="0 0 100 110" preserveAspectRatio="none">
                            <path d="M 0 20 H 88 A 5 10 0 0 1 88 60 H 12 A 5 10 0 1 0 12 100 L 100 100" stroke="black" strokeDasharray="9" fill="none" vector-effect="non-scaling-stroke" />
                            <image href={start} x="0" y="11" height="10px" width="8px" />
                            <CircleImage imagecli={image1} textContent="Fundamental" x='0' y='0' color="#4B8CE8" imageX="0" imageY="0" dotFill="#4B8CE8"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Arrays" x='13' y='0' color="#4B8CE8" imageX="13" imageY="0" dotFill="#4B8CE8"></CircleImage>
                            <CircleImage imagecli={image1} textContent="Strings" x='26' y='0' color="#4B8CE8" imageX="26" imageY="0" dotFill="#4B8CE8"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Recursion" x='39' y='0' color="#4B8CE8" imageX="39" imageY="0" dotFill="#4B8CE8"></CircleImage>
                            <CircleImage imagecli={image1} textContent="Bit Manipu." x='52' y='0' color="#817f82" imageX="52" imageY="0" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Seraching" x='65' y='0' color="#817f82" imageX="65" imageY="0" dotFill="#FFF"></CircleImage>

                            <CircleImage imagecli={image1} textContent="Heaps" x='-6' y='40' color="#817f82" imageX="-6" imageY="40" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Tree" x='7' y='40' color="#817f82" imageX="7" imageY="40" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image1} textContent="Queue" x='20' y='40' color="#817f82" imageX="20" imageY="40" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="stack" x='33' y='40' color="#817f82" imageX="33" imageY="40" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image1} textContent="Linked List" x='46' y='40' color="#817f82" imageX="46" imageY="40" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Sorting" x='59' y='40' color="#817f82" imageX="59" imageY="40" dotFill="#FFF"></CircleImage>

                            <CircleImage imagecli={image1} textContent="Graphs" x='0' y='80' color="#817f82" imageX="0" imageY="80" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="D & C" x='13' y='80' color="#817f82" imageX="13" imageY="80" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image1} textContent="Greedy Algo" x='26' y='80' color="#817f82" imageX="26" imageY="80" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="BackTrac" x='39' y='80' color="#817f82" imageX="39" imageY="80" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image1} textContent="D. Pro." x='52' y='80' color="#817f82" imageX="52" imageY="80" dotFill="#FFF"></CircleImage>
                            <CircleImage imagecli={image2} textContent="Challenge" x='65' y='80' color="#817f82" imageX="65" imageY="80" dotFill="#FFF"></CircleImage>
                            <image href={finish} x="92" y="86" height="15px" width="9px" />
                        </svg>
                    </div>
                </div>


            </React.Fragment >
        );
    }
}
export default ServiceBox;  