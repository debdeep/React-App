import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const RestaurantList = ({ resListdata }) => {
    const [showTopRestaurants, setShowTopRestaurants] = useState(false);

    const displayedList = showTopRestaurants
        ? resListdata?.filter((restaurant) => restaurant?.info?.avgRating > 4.5)
        : resListdata;

    return (
        <>
            <button className="filter-btn" onClick={() => {
                setShowTopRestaurants((prev) => !prev);
            }}>
                {showTopRestaurants ? "Show All Restaurants" : "Show Top Restaurants"}
            </button>
            <div className="cards-row">
                {displayedList?.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} data={restaurant} className="res-card" />
                ))}
            </div>
        </>
    )
}

export default RestaurantList;