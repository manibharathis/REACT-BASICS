import React from "react";
import { useState } from "react";
import RES_LIST from "../utils/restrauntList";
import Card from "./RestrauntCard";




const Body = () => {
    const [filterData,setfilterData] = useState(RES_LIST);
    const handleTopRated = () =>{
        const filter = filterData.filter(e=>e.info.avgRating>4.5)
        setfilterData(filter)
    }
  return (
    <div>
      <div className="search-container">
        {/* <div className="search-bar">
          <input type="text"></input>
        </div> */}
        <button className="filter" onClick={handleTopRated}>Fitler Top  Restraunts</button>
      </div>
      <div className="card-box">
        {filterData.map((res) => (
          <div className="card-container" key={res.info.id}>
            <Card resData={res} key={res.info.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
