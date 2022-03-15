import { CarouselWrapper, prev, next, q } from "react-pretty-carousel";

import React, { useState, useEffect } from "react";
import slide from "./hmc_style.module.css";

import image1 from "./image 41.png";
import image2 from "./image 42.png";
import image3 from "./image 47.png";

import leftArrow from "./assets/leftArrow.png";
import rightArrow from "./assets/rightArrow.png";

const HmcSlider = () => {
    const images = [image1, image2, image3, image1, image2, image3, image2];
    const [currIndex, setCurrIndex] = useState(3);
    const names = [
        "Warden",
        "Secretary",
        "Watchman",
        "Gaurd",
        "Secretary",
        "Watchman",
        "Gaurd",
    ];

    const [items, setItems] = useState(5);

    useEffect(() => {
        if (window.innerWidth < 400) setItems(1);
        else setItems(5);
        window.addEventListener("resize", () => {
            if (window.innerWidth < 690) setItems(3);
            else setItems(5);
        });
    }, []);

    return (
        <div className={slide.container}>
            <CarouselWrapper items={items} mode="gallery" showControls={false}>
                {images.map((img, ind) => (
                    <img src={img} className={slide.image} />
                ))}
            </CarouselWrapper>
            <div className={slide.arrows}>
                <img
                    src={leftArrow}
                    alt=""
                    onClick={() => {
                        let indexVal = currIndex;
                        if (indexVal === 0) {
                            indexVal = images.length() - 1;
                        } else {
                            indexVal--;
                        }
                        setCurrIndex(indexVal);
                        prev();
                    }}
                    className={slide.prev}
                />
                <div className={slide.name}>{names[currIndex]}</div>
                <img
                    src={rightArrow}
                    alt=""
                    onClick={() => {
                        let indexVal = currIndex;
                        if (indexVal === images.length - 1) {
                            indexVal = 0;
                        } else {
                            indexVal++;
                        }
                        setCurrIndex(indexVal);
                        next();
                    }}
                    className={slide.next}
                />
            </div>
        </div>
    );
};

export default HmcSlider;
