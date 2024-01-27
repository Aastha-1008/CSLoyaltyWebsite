import React, { useState, useEffect} from "react";
import { SliderImages } from '../../Home/sliderImages';

import './ImageSlider.scss';

const ImageSlider = () => {
    const [currInd, setCurrInd] = useState(0);
    const delay = 5000;



    useEffect(() => {
        setTimeout(
            () => setCurrInd((prevInd) => prevInd === SliderImages.length - 1 ? 0 : prevInd + 1)
            , delay);

    }, [currInd]);

    return (
        <div className="slideshow">
            <div className="slider-container">
                {SliderImages.map((slide, index) => (
                    (index === currInd) &&
                    <div className="slide" key={index}>
                        <img src={slide.image} alt="slider" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;