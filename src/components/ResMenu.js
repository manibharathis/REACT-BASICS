import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetResMenu from "../utils/useGetResMenu";
import Shimmer from "../components/Shimmer";
import ItemList from "./ItemList";
const ResMenu = () => {
  const { resid } = useParams();
  const [showItems,setShowItems] = useState(false)
  const dummy = [];
  const resMenuData = useGetResMenu(resid);
  console.log("resmenu", resMenuData);
  if (resMenuData === null) return <Shimmer />;
  const menulist = resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR
    .cards[3].card.card.itemCards
    ? resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
        .card.itemCards
    : resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
        .card.categories[0].itemCards;

  const categories = resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  
  console.log(categories)
  const handleClick = ()=>{
        setShowItems(!showItems)
  }
  return (
    <div className="text-center w-6/12 mx-auto">
      <h1 className="font-bold text-2xl">
        {resMenuData?.data?.cards[0]?.card?.card?.text}
      </h1>
      <h4 className="text-gray-400 text-sm">
        {resMenuData.data.cards[2]?.card?.card?.info?.labels[2]?.message}
      </h4>
      <h4 className="text-gray-400 text-sm">
        {resMenuData.data.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h4>
      {categories.map((e) => (
        <div className="" key={e.card.card.categoryId}>
          <div className="flex justify-between cursor-pointer p-4" onClick={handleClick}>
            <span className="font-bold text-xl">
              
              {e?.card?.card?.title}({e?.card?.card?.itemCards.length})
            </span>
            <span>⬇️</span>
            </div>
            {showItems?<ItemList items={e?.card?.card?.itemCards} /> : " "}
            
          
          
          <div className=" border-b-gray-200 border-b-8 border-8 border-gray-200 h-4"></div>
        </div>
      ))}
    </div>
  );
};
export default ResMenu;
