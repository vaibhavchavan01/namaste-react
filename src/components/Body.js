import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [resListData, setResListData] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filterResListData = () => {
        const filterData = resListData.filter((res) =>
            res.card.card.info?.avgRating > 4
        );
        setResListData(filterData)
    };
    const searchAndFilterData = () => {
        const response = resListData.filter((res) => {
            return res.card.card?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setResListData(response);
        setFilteredRestaurant(response);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const jsonSwiggyData = await response.json();
        setResListData(jsonSwiggyData?.data?.cards);
        setFilteredRestaurant(jsonSwiggyData?.data?.cards);
    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1> Looks like you are offline !! please check your internet connectction.</h1>
        )
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) =>
                        setSearchText(e.target.value)} />
                    <button onClick={() => searchAndFilterData()}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => filterResListData()} >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant?.map((restaurentInfo) => (
                        (restaurentInfo.card.card.info) ?
                            <Link key={restaurentInfo.card.card.info.id} to={"/restaurants/" + restaurentInfo.card.card.info.id} >
                                <RestaurantCard resData={restaurentInfo} />
                            </Link> : null
                    ))
                }
            </div>
        </div>
    )
}
export default Body;