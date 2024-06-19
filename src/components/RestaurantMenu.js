import { useEffect, useState } from "react";
import Body from "./Body";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
    const restaurantId = useParams()
    const restaurantMenu = useRestaurentMenu(restaurantId);

    if (restaurantMenu === null) return <Body />
    
    const { name } = restaurantMenu[2].card.card.info;
    const { title, itemCards } = restaurantMenu[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log('itemCards:--->', itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <div className="recommended">
                <ul>
                    {
                        itemCards?.map((itemCard) =>
                            <div >
                                <li>{itemCard.card.info?.name}</li>
                            </div>
                        )
                    } </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
