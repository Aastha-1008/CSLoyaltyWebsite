import React, { useState, useEffect } from "react";
import { TestimonialsData } from "../../Home/TestimonialsData";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ContentSlider.scss';

const ContentSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(currentIndex);
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === TestimonialsData.length - 1) ? 0 : prevIndex + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="content_slider">
            {
                TestimonialsData.map(({ title, content, position }, index) => (
                    (index === currentIndex) &&
                    <div className="testimonial_content slide" >
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <br/>
                        <p><FontAwesomeIcon icon={faStar} style={{ "color": "#ffd43b" }} />
                            <FontAwesomeIcon icon={faStar} style={{ "color": "#ffd43b" }} />
                            <FontAwesomeIcon icon={faStar} style={{ "color": "#ffd43b" }} />
                            <FontAwesomeIcon icon={faStar} style={{ "color": "#ffd43b" }} />
                            <FontAwesomeIcon icon={faStar} style={{ "color": "#ffd43b" }} />
                        </p><br/>
                        <p>{position}</p>
                    </div>

                ))
            }
        </div>
    );
}

export default ContentSlider;