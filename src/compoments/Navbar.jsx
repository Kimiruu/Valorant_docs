import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink to="/" className={"containernavleft"}>
                <img src="./Valorant_logo.png" alt="logo" className="logo" />
                <img src="./Valorant_Name.png" alt="name" className="imgname" />
            </NavLink>
            <div className="containernavright">
                <NavLink to="/agents">Agents</NavLink>
                <NavLink to="/maps">Maps</NavLink>
                <NavLink to="/arsenal">Arsenal</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
