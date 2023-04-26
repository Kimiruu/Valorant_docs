import React from "react";

const AgentAbilities = ({ abilitiesData, id }) => {
    const corres=[
        "Q - ",
        "E - ",
        "C - ",
        "X - ",
    ]
  return (
    <>
        {abilitiesData.slot === 'Passive' && <span className="tilte">Passive</span> }
    <div className="AgentAbilities">
        <img src={abilitiesData.displayIcon} alt="ability" className="icon"/>
        <div className="textcontainer">
        <span className="subtitle">{corres[id]}{abilitiesData.displayName}</span>
        <span>{abilitiesData.description}</span>
        </div>
    </div>
    </>
  );
};

export default AgentAbilities;
