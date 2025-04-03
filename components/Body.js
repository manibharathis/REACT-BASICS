import React from "react";
import { useState , useEffect} from "react";
import RES_LIST from "../utils/restrauntList";
import Card from "./RestrauntCard";
import Shimmer from "./Shimmer";



const Body = () => {
  const [ListOfRestraunts,setListOfRestraunts] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() =>{
   const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
   const json = await data.json()
   console.log(json)
   const reslist = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   setListOfRestraunts(reslist)
   
  }
    const handleTopRated = () =>{
        const filter = filterData.filter(e=>e.info.avgRating>4.5)
        setfilterData(filter)
    }

  if(ListOfRestraunts.length == 0){
      return(
        <Shimmer />
        
      )
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
        {ListOfRestraunts.map((res) => (
          <div className="card-container" key={res.info.id}>
            <Card resData={res} key={res.info.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
