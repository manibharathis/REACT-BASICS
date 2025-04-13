import { RES_MENU_URL } from "./constants";
import { useState,useEffect } from "react";
const useGetResMenu = (resid) => {
  const [resMenuData, setresMenuData] = useState(null);
  const [resName, setresName] = useState("");
  const [resInfo, setResInfo] = useState([]);
   useEffect(()=>{
          fetchData()
      },[])
  const fetchData = async () => {
    const data = await fetch(
      RES_MENU_URL + resid + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const resmenudata = await data.json();
    console.log(resMenuData)
   // setresName(resmenudata.data.cards[0].card.card.text);
    // console.log(
    //   resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
    //     .card.itemCards
    //     ? resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
    //         .card.card.itemCards
    //     : resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
    //         .card.card.categories[0].itemCards
    // );
    // setresMenuData(
    //   resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
    //     .card.itemCards
    //     ? resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
    //         .card.card.itemCards
    //     : resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3]
    //         .card.card.categories[0].itemCards
    // );
   // setResInfo(resmenudata.data.cards[2]);
   setresMenuData(resmenudata)
  };
  return resMenuData
};

export default useGetResMenu