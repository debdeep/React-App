const RestaurantCard = ({ className = "", data }) => {
    const { name, cuisines, locality, areaName, veg, avgRating, aggregatedDiscountInfoV3 } = data?.info || {};

    return (
        <div className={`card ${className}`.trim()}>
            <h3>{name?.toUpperCase()}</h3>
            <div>{cuisines?.join(", ")}</div>
            <div>{locality}, {areaName}</div>
            <div className={veg ? 'food-veg' : 'food-non-veg'}>
                {veg ? "Veg" : "Non veg"}
            </div>
            <div className="rating"><span className="star" aria-hidden="true">★</span><span className="rating-value">{avgRating}</span></div>
            <hr />
            <span>{aggregatedDiscountInfoV3.header} | {aggregatedDiscountInfoV3.subHeader}</span>

        </div>
    );
};

export default RestaurantCard;