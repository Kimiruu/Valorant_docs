import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";

import "./Agents.scss";

import AgentResume from "../compoments/AgentResume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Agents = () => {
    const [state, setstate] = useState([]);
    const [role, setrole] = useState();
    const [searchName, setsearchName] = useState();

    const getData = async () => {
        const res = await fetch("https://valorant-api.com/v1/agents");
        const req = await res.json();
        console.log(req);
        setstate(orderBy(req.data, "displayName", "asc"));
    };

    let newState = role
        ? state.filter((el) => {
              return el.role && el.role.displayName === role;
          })
        : [...state];

    newState = searchName
        ? newState.filter((el) => {
              return el.displayName
                  .toLowerCase()
                  .includes(searchName.toLowerCase());
          })
        : newState;

    const rolenull = (newRole) => {
        role === newRole ? setrole(null) : setrole(newRole);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="Agents">
            <div className="searchbarcontainer">
                <div className="searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} inverse />
                    <input
                        type="text"
                        onInput={(event) => setsearchName(event.target.value)}
                    />
                </div>
            </div>
            <div className="buttonsContainer">
                <button className={role ===null ? "active" : ""} onClick={() => setrole(null)}>All</button>
                <button className={role ==="Duelist" ? "active" : ""} onClick={() => rolenull("Duelist")}>Duelist</button>
                <button className={role ==="Sentinel" ? "active" : ""} onClick={() => rolenull("Sentinel")}>Sentinel</button>
                <button className={role ==="Controller" ? "active" : ""} onClick={() => rolenull("Controller")}>
                    Controller
                </button>
                <button className={role ==="Initiator" ? "active" : ""} onClick={() => rolenull("Initiator")}>Initiator</button>
            </div>
            <div className="separator"></div>
            <div className="agentcontainer">
                {newState.map((el, id) => {
                    if (el.role === null)
                        return <React.Fragment key={id}></React.Fragment>;
                    return <AgentResume agentData={el} key={id} />;
                })}
            </div>
        </div>
    );
};

export default Agents;
