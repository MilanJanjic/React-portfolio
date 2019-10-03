import React from 'react'
import './style.css'
import image from './image.jpg'

const Slider = () =>
    <div className="container-fixed px-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicatiors"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="indicatiors"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="indicatiors"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3" className="indicatiors"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4" className="indicatiors"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5" className="indicatiors"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    </div>

export default Slider;