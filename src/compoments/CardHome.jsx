import React from 'react';
import "./CardHome.scss"

const CardHome = ({propsimg, props}) => {
    return (
        <div className='CardHome'>
            <div className='titlecontainer'>
            <p>{props}</p>
            </div>
            <img src={propsimg} alt="img" className='image'/>
        </div>
    );
};

export default CardHome;