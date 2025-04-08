import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"


const ResMenu=()=>{
    
    const [resMenuData,setresMenuData] = useState([]);
    const [resName,setresName] = useState('')
    const [resInfo,setResInfo] = useState([])
    const {resid} = useParams();
    console.log("resid",resid)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const data = await fetch('https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId='+resid+'&catalog_qa=undefined&submitAction=ENTER')
        const resmenudata= await data.json()
        console.log(resmenudata)
        console.log(resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories)
       // console.log(resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards)
       // setresMenuData(resMenuData)
        // console.log(resmenudata.data.cards[0].card.card.text)
        setresName(resmenudata.data.cards[0].card.card.text)
        // console.log(resmenudata.data.cards[2].card.card.info.labels[2].message)
        // console.log(resmenudata.data.cards[2].card.card.info.costForTwoMessage)
        //console.log(resmenudata.data.cards[2].card.card.info.cloudinaryImageId)
       // console.log(resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
        setresMenuData(resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards?resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards:resmenudata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards)
        setResInfo(resmenudata.data.cards[2])
    }
    return(
        <div className="res-menu">
        {/* <h2>{resMenuData.data.cards[2].card.card.info.labels[2].message}</h2> */}
        <h1>{resName}</h1>
        <h4>{resInfo?.card?.card?.info?.labels[2]?.message}</h4>
        <h4>{resInfo?.card?.card?.info?.costForTwoMessage}</h4>
        {resMenuData?.map(e=>(
            
                <div key={e.card.info.id}>{e.card.info.name}</div>
            )
        )}
        
        </div>
    )
}
export default ResMenu
