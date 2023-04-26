import React from 'react';
import { NavLink } from 'react-router-dom';

const AgentResume = ({agentData}) => {
    const style={
        "--color1" : "#"+agentData.backgroundGradientColors[0],
        "--color2" : "#"+agentData.backgroundGradientColors[1],
        "--color3" : "#"+agentData.backgroundGradientColors[2],
        "--color4" : "#"+agentData.backgroundGradientColors[3]
    }
    

    return (
        <div className="agentresume" style={style}>
            <NavLink to={'/agents/'+agentData.displayName.replace("/", "")}>
                <img src={agentData.fullPortrait} alt="agent" className='front'/>
                <img src={agentData.background} alt="background" className='back'/>
                <div className='namecontainer'> 
                    <span>{agentData.displayName}</span> 
                </div>
            </NavLink>
        </div>
    );
};

export default AgentResume;