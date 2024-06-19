import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const menuData = await fetch(MENU_URL + restaurantId.resId);
        const json = await menuData.json();
        setResInfo(json?.data?.cards);
    }
    return resInfo;
}

export default useRestaurentMenu;   