import { CDN_URL } from "../utils/constants";
 const Card = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
      resData?.info;
    return (
      <div className="card">
        <img
          alt="res-img"
          className="res-img"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <div className="res-details">
          <p>{name}</p>
          <p>{avgRating}</p>
          <div className="cuisines-container">
          <p className="cuisines">{cuisines.join(',')}</p>
          </div>
          <p>{costForTwo}</p>
        </div>
      </div>
    );
  };
  
export default Card
  