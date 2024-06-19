import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, sla } = resData.card.card.info
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + resData.card.card.info?.cloudinaryImageId} />
            <h3>{(name.split('-')[0])}</h3>
            <p><h4>{cuisines.join(', ')}</h4></p>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime + " minutes"}</h4>
        </div>
    )
}
export default RestaurantCard;

