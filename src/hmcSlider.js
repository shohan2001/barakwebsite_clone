import hmc from "./hmc_style.module.css";

import "./App.css";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { useState } from "react";
import imag from "./assets/image.png";
import leftArrow from "./assets/leftArrow.png";
import rightArrow from "./assets/rightArrow.png";

const images = [imag, imag, imag, imag];

const PrevArrow = ({ onClick }) => {
    return (
        <div className={hmc.arrowLeft} onClick={onClick}>
            <img src={leftArrow} alt="" />
        </div>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <div className={hmc.arrowRight} onClick={onClick}>
            <img src={rightArrow} alt="" />
        </div>
    );
};

const Hmc = () => {
    // settings is an js object that we created and we are going to reference it

    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <Slider {...settings}>
            {images.map((imgg, ind) => (
                <div
                    className={ind === imageIndex ? hmc.activeSlide : hmc.slide}
                >
                    <img src={imgg} alt={imgg} />
                </div>
            ))}
        </Slider>
    );
};

export default Hmc;
