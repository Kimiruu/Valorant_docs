import React from "react";
import MapModal from "./MapModal";
import { useState } from "react";

const MapResume = ({ mapData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);
    return (
        <div>
            <div className="mapresume">
                <button onClick={open}>
                    <img src={mapData.splash} alt="map" />
                    <div className="namecontainer">
                        <span>{mapData.displayName}</span>
                    </div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 19.5C18.8284 19.5 19.5 18.8284 19.5 18L19.5 4.5C19.5 3.67157 18.8284 3 18 3C17.1716 3 16.5 3.67157 16.5 4.5V16.5H4.5C3.67157 16.5 3 17.1716 3 18C3 18.8284 3.67157 19.5 4.5 19.5L18 19.5ZM0.93934 3.06066L16.9393 19.0607L19.0607 16.9393L3.06066 0.93934L0.93934 3.06066Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <MapModal isOpen={isOpen} close={close} mapData={mapData} />
        </div>
    );
};

export default MapResume;
