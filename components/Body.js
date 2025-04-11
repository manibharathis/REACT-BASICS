import React from "react";
import { useState, useEffect } from "react";
import { RES_LIST_URL } from "../utils/constants";
import Card from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";
import Offline from "./Offline";

const Body = () => {
  const resList = useResList();
  useEffect(() => {
    setFilterRestraunts(resList);
    
  }, [resList]);

  const [isfiltered, setIsFiltered] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRestraunts, setFilterRestraunts] = useState([]);
  const ListOfRestraunts = resList;
  const isOnline = useOnlineStatus(setFilterRestraunts);
  if (isOnline === false) {
    return (
      <div>
        <Offline />
      </div>
    );
  }
  const handleTopRated = () => {
    setIsFiltered(true);
    const filter = ListOfRestraunts.filter((e) => e.info.avgRating > 4.5);

    setFilterRestraunts(filter);
  };
  const handleRemoveFilter = () => {
    setIsFiltered(false);
    setFilterRestraunts(ListOfRestraunts);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length == 0 && isfiltered == true)
      return setFilterRestraunts(filteredRestraunts);
    let filteredres = ListOfRestraunts.filter((f) =>
      f.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterRestraunts(filteredres);
  };

  if (ListOfRestraunts.length == 0) {
    return <Shimmer />;
  }
  if (filteredRestraunts.length == 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="search-container">
        {!isfiltered ? (
          <button className="filter" onClick={handleTopRated}>
            Fitler Top Restraunts
          </button>
        ) : (
          <button className="filter" onClick={handleRemoveFilter}>
            remove filter
          </button>
        )}

        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <div className="card-box">
        {filteredRestraunts.map((res) => (
          <div className="card-container" key={res.info.id}>
            <Link to={"/restraunts/" + res.info.id}>
              {" "}
              <Card resData={res} key={res.info.id} />{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
