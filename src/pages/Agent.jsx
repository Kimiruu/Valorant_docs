import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AgentAbilities from "../compoments/AgentAbilities";

import "./Agent.scss"

const Agent = () => {
  const params = useParams();
  console.log(params.name);

  const getData = async () => {
    console.log("ca marche aussi");
    const res = await fetch("https://valorant-api.com/v1/agents");
    const req = await res.json();
    req.data.forEach((el) => {
      if (el.role === null) return null;
      if (el.displayName.replace("/", "") === params.name) setstate(el);
    });
  };
  const [state, setstate] = useState(null);
  
  console.log(state);
  
  useEffect(() => {
    getData();
  }, []);
  
  const color={
    "--grad1" : "#"+state?.backgroundGradientColors[0],
    "--grad2" : "#"+state?.backgroundGradientColors[1],
    "--grad3" : "#"+state?.backgroundGradientColors[2],
    "--grad4" : "#"+state?.backgroundGradientColors[3],
}



if (state) return (
    <div className="Agent" >
      <div className="goback">
        <NavLink to='/agents' className={'arrow'}>
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
        </NavLink>
      </div>
      <div className="container">
        <div className="imgcontainer" style={color}>
          <img src={state.fullPortrait} alt="agent" className="front" />
          <img src={state.background} alt="background" className="back" />
        </div>
        <div>
          <span className="tilte">{state.displayName}</span>
        </div>
        <div className="titlecontainer">
            <img src={state.role.displayIcon} alt="role" className="classicon"/>
            <span className="tilte">{state.role.displayName}</span>
        </div>
      </div>
      <div className='separator'></div>
      <div className="descriptioncontainer">
        <span className="tilte">Description</span>
        <span>{state.description}</span>
      </div>
      <div className="abilitiescontainer">
        <span className="tilte">Special abilities</span>
        <div className="container">
            {state.abilities.map( (el, id) => {
                return <AgentAbilities abilitiesData={el} key={id} id={id}/>
            })}
        </div>
        <div>
        
        </div>
      </div>
    </div>
  ); return <></>
};

export default Agent;
