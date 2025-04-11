import { useState, useEffect } from "react";
import { RES_LIST_URL } from "./constants";
const useResList = () => {
  const [resList, setResList] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    const reslist =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(reslist);
   // setFilterRestraunts(resList)
    
  };
  return resList;
};
export default useResList;
