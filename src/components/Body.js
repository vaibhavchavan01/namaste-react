import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
// import { resList } from "../utils"
//shimmer UI

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
        console.log('searchText:--->', searchText);
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
        console.log("jsonSwiggyData:--->", jsonSwiggyData);
        setResListData(jsonSwiggyData?.data?.cards);
        setFilteredRestaurant(jsonSwiggyData?.data?.cards);
    }
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
                    filteredRestaurant?.map((item) => (
                        (item.card.card.info) ?
                            <RestaurentCard key={item.card.card.info.id} resData={item} /> : null
                    ))
                }
            </div>
        </div>
    )
}
export default Body;