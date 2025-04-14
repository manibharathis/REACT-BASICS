import { CDN_URL } from "../utils/constants";
 const Card = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
      resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-sm">
        <img
          alt="res-img"
          className="w-48 ml-4 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <div >
          <p className="font-bold py-4 ml-4 text-lg">{name}</p>
          <p className="ml-4">{avgRating}</p>
         
          <div className=" ml-4 overflow-hidden text-ellipsis">{cuisines.join(',')}</div>
          
          <p className="ml-4">{costForTwo}</p>
        </div>
      </div>
    );
  };
 export const PromotedCard = (Card)=>{
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black rounded-lg text-white m-2 p-2">
            Promoted
          </label>
          <Card {...props} />
        </div>
      )
    }
  }
export default Card
  