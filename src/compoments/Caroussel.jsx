import React, { useState } from "react";
import "./Caroussel.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DetailCaroussel from "./DetailCaroussel";

const Caroussel = ({ mapDetails, mapData }) => {
    const [fraction, setfraction] = useState(1);
    return (
        <div className="Caroussel">

            
                {!mapDetails[mapData.displayName]?.image ? (
                    <img src={mapData.splash} alt="map" />
                ) : (<Swiper
                    className="myswiper"
                    modules={[Navigation, Pagination]}
                    slidesPerView={"auto"}
                    onActiveIndexChange={(swiperCore) => {setfraction(swiperCore.activeIndex+1)}}
                    >{(
                    mapDetails[mapData.displayName]?.image?.map((el, key) => {
                        return (
                            <SwiperSlide key={key}>
                                {" "}
                                <img src={el} alt="" />
                            </SwiperSlide>
                        );
                    })
                )}<DetailCaroussel el={fraction} mapData={mapData}/> </Swiper>
                )}
                
            

        </div>
    );
};

export default Caroussel;
