import React from "react";
import mapDetails from "../assets/mapDetails";
import "./MapModal.scss";
import Caroussel from "./Caroussel";

const MapModal = ({ isOpen, close, mapData }) => {
    return (
        <div>
            <div className={`modalContainer ${isOpen ? "active" : "inactive"}`}>
                <div className="modal">
                    <button onClick={close}>
                        <svg
                            className="cross"
                            width="40"
                            height="40"
                            viewBox="0 0 63 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="4.41421"
                                y1="1.58579"
                                x2="61.4142"
                                y2="58.5858"
                                stroke="#ECE8E1"
                                strokeOpacity="0.8"
                                strokeWidth="4"
                            />
                            <line
                                x1="1.58579"
                                y1="59.5858"
                                x2="21.5858"
                                y2="39.5858"
                                stroke="#ECE8E1"
                                strokeOpacity="0.8"
                                strokeWidth="4"
                            />
                            <line
                                x1="42.5858"
                                y1="18.5858"
                                x2="58.5858"
                                y2="2.58579"
                                stroke="#ECE8E1"
                                strokeOpacity="0.8"
                                strokeWidth="4"
                            />
                        </svg>
                    </button>
                    <p className="textbg">
                        {mapData.displayName.toUpperCase()}
                    </p>
                    <div className="square"></div>
                    <div className="container">
                        <div className="containerleft">
                            <p className="title">{mapData.displayName}</p>
                            <p className="coordonate">{mapData.coordinates}</p>
                            <p className="description">
                                {mapDetails[mapData.displayName]?.description}
                            </p>
                        </div>
                        <div className="containerright">
                            <Caroussel mapDetails={mapDetails} mapData={mapData}/>
                            <div className="carre"></div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapModal;
