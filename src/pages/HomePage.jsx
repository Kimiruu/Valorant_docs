import React from "react";
import "./Homepage.scss";
import homepageData from "../assets/homepageData";
import CardHome from "../compoments/CardHome";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="Homepage">
            <div className="top">
                <div className="title">
                    <p>VALORANT DOC</p>
                    <div className="separator"></div>
                    <p>A 5v5 character-based tactical shooter</p>
                </div>
                <div className="imgcontainer">
                <img src={homepageData.image} alt="image" className="img" />
                
                <video
                    className="vid"
                    preload="true"
                    muted
                    autoPlay
                    loop
                    src={homepageData.video}
                    type="video/mp4"
                ></video>
                <div className="overlay"></div>
                </div>
            </div>
            <div className="containerbottom">
                <NavLink to={"./agents"}>
                    <CardHome props={"Agent"} propsimg={"./agents.png"} />
                </NavLink>
                <NavLink to={"./maps"}>
                    <CardHome props={"Maps"} propsimg={"./maps.png"} />
                </NavLink>
                <NavLink to={"./arsenal"}>
                    <CardHome props={"Arsenals"} propsimg={"./arsenal.png"} />
                </NavLink>
            </div>
        </div>
    );
};

export default HomePage;
