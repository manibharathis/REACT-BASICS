import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetResMenu from "../utils/useGetResMenu";
import Shimmer from "../components/Shimmer"

const ResMenu = () => {
  // const [resMenuData,setresMenuData] = useState([]);
  // const [resName,setresName] = useState('')
  // const [resInfo,setResInfo] = useState([])
  const { resid } = useParams();
  const dummy = [];
  const resMenuData = useGetResMenu(resid);
  console.log("resmenu", resMenuData);
  if (resMenuData === null) return <Shimmer />;
  const menulist = resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
      .card.itemCards
      ? resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
          .card.card.itemCards
      : resMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
          .card.card.categories[0].itemCards
  return (
    <div className="res-menu">
      <h2>{resMenuData?.data?.cards[2]?.card?.card?.info.labels[2].message}</h2>
      <h1>{resMenuData?.data?.cards[0]?.card?.card?.text}</h1>
      <h4>{resMenuData.data.cards[2]?.card?.card?.info?.labels[2]?.message}</h4>
      <h4>{resMenuData.data.cards[2]?.card?.card?.info?.costForTwoMessage}</h4>
      {menulist.map((e) => (
        <div key={e.card.info.id}>
          {e?.card?.info?.name + " - " + e?.card?.info?.price / 100}
        </div>
      ))}
    </div>
  );
};
export default ResMenu;
