import { Link } from "react-router-dom";
import { RESTAURANT_TYPE } from "./../utils/constants";

const RestaurantCard = ({ className = "", data }) => {
    const { id, name, cuisines, locality, areaName, veg, avgRating, aggregatedDiscountInfoV3 } = data?.info || {};

    return (
        <Link to={`/restaurant/${id}`} className="card-link">
            <div className={`card ${className}`.trim()}>
                <div className="card-hover-icon">👁️</div>
                <h3>{name?.toUpperCase()}</h3>
                <div>{cuisines?.join(", ")}</div>
                <div>{locality}, {areaName}</div>
                <div className={veg ? 'food-veg' : 'food-non-veg'}>
                    {veg ? RESTAURANT_TYPE.VEG : RESTAURANT_TYPE.NONVEG}
                </div>
                <div className="rating"><span className="star" aria-hidden="true">★</span><span className="rating-value">{avgRating}</span></div>
                <hr />
                <span>{aggregatedDiscountInfoV3?.header} | {aggregatedDiscountInfoV3?.subHeader}</span>
            </div>
        </Link>
    );
};

export default RestaurantCard;