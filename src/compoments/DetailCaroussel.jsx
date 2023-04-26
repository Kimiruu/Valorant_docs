import React from "react";
import { useSwiper } from "swiper/react";
import mapDetails from "../assets/mapDetails";
import './DetailCaroussel.scss'

const DetailCaroussel = ({el, mapData}) => {
    const swiper = useSwiper();
    return (
        <div className="DetailCaroussel">
            <div className="text">
                <p>{el} / {mapDetails[mapData.displayName]?.image.length}</p>
            </div>
            <div className="buttons">
            <button classname="button prev" onClick={() => swiper.slidePrev()}>
                <svg
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        y1="-0.5"
                        x2="20.2836"
                        y2="-0.5"
                        transform="matrix(-0.824311 0.566137 0.792449 0.609939 17.7202 1)"
                        stroke="white"
                    />
                    <line
                        y1="-0.5"
                        x2="11.0603"
                        y2="-0.5"
                        transform="matrix(0.840575 0.541695 0.767911 -0.640557 7.89404 16.2492)"
                        stroke="white"
                    />
                </svg>
            </button>
            <div className="back"></div>
            <button classname='button next'onClick={() => swiper.slideNext()}>
                <svg
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        y1="-0.5"
                        x2="20.2818"
                        y2="-0.5"
                        transform="matrix(0.824276 0.566188 -0.792409 0.60999 0 1)"
                        stroke="white"
                    />
                    <line
                        y1="-0.5"
                        x2="11.0592"
                        y2="-0.5"
                        transform="matrix(-0.840542 0.541746 -0.767869 -0.640607 9.82471 16.2492)"
                        stroke="white"
                    />
                </svg>
            </button>
            </div>
        </div>
    );
};

export default DetailCaroussel;
