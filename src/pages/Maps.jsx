import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import MapResume from '../compoments/MapResume';
import "./Maps.scss"

const Maps = () => {
    const [state, setstate] = useState([]);
    const [searchName, setsearchName] = useState();

    const getData = async() => {
        const res = await fetch ("https://valorant-api.com/v1/maps")
        const req = await res.json()
        console.log(req) 
        setstate(orderBy(req.data, "displayName", "asc"));
    }

    let newState = searchName
        ? state.filter((el) => {
              return el.displayName
              .toLowerCase()
              .includes(searchName.toLowerCase());
          })
        : [...state];

    useEffect(() => {
        getData()
    }, []) 
    
    return (
        <div className='maps'>
            <div className="searchbarcontainer">
                <div className="searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} inverse />
                    <input
                        type="text"
                        onInput={(event) => setsearchName(event.target.value)}
                    />
                </div>
            </div>
            <div className="separator"></div>
            
            <div className='mapcontainer'>
            {newState.map( (el, id) => {
                return <MapResume mapData={el} key={id}/>
            })}
            </div>  
        </div>
    );
};

export default Maps;