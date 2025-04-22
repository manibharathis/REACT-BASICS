import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch()
  const handleClick=(e)=>{
    dispatch(addItem(e))

  }
  return (
    <div className=" ">
      {items.map((e) => (
        <div
          className="flex border-b-2 b-2 border-gray-200  justify-between py-8"
          key={e.card?.info?.id}
        >
          <div className="w-6/12">
            <div className="font-extrabold text-left">{e.card?.info?.name}</div>
            <div className="text-left">₹ {e.card?.info?.price / 100}</div>
            <div className="text-wrap  text-sm text-left overflow-hidden text-ellipsis break-words">
              {e.card?.info?.description}
            </div>
          </div>
          <div className="w-6/12">
          <button className="absolute mt-28 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => handleClick(e)}>Add</button>
         
            <img
              className="w-6/12 rounded-lg ml-40"
              src={CDN_URL + e.card?.info?.imageId}
            ></img>
             </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
