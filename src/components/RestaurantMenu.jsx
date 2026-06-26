import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RESTAURANT_MENU } from "./../utils/constants";

const RestaurantMenu = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchRestaurantDetail = async () => {
            try {
                const url = `https://namastedev.com/api/v1/listRestaurantMenu/${id}`;
                console.log("Fetching from:", url);

                const response = await fetch(url);
                const data = await response.json();

                console.log("API Response:", data);

                if (!data?.status) {
                    console.error("API returned error status:", data);
                    setRestaurant(null);
                    setLoading(false);
                    return;
                }

                const restaurantData = data?.data?.cards?.[2]?.card?.card?.info || {};
                console.log("Restaurant Data:", restaurantData);

                // Extract menu items from groupedCard structure
                const groupedCards = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
                console.log("Grouped Cards:", groupedCards);

                const allMenuItems = [];

                groupedCards.forEach(cardWrapper => {
                    const itemCards = cardWrapper?.card?.card?.itemCards || [];
                    itemCards.forEach(item => {
                        allMenuItems.push(item?.card?.info);
                    });
                });

                console.log("Menu Items:", allMenuItems);
                setRestaurant({ info: restaurantData, menu: allMenuItems });
            } catch (error) {
                console.error("Failed to load restaurant detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurantDetail();
    }, [id]);

    if (loading) {
        return <div className="restaurant-menu"><p>Loading restaurant...</p></div>;
    }

    if (!restaurant && id) {
        return (
            <div className="restaurant-menu">
                <h2>{RESTAURANT_MENU.NOT_FOUND}</h2>
                <button onClick={() => navigate('/')}>{RESTAURANT_MENU.BACK_TO_HOME}</button>
            </div>
        );
    }

    if (!id) {
        return (
            <div className="restaurant-menu">
                <h2>{RESTAURANT_MENU.MISSING_ID_HEADER}</h2>
            </div>
        );
    }

    const { name, cuisines, locality, areaName, veg, avgRating, totalRatingsString, cloudinaryImageId, sla } = restaurant?.info || {};
    const menuItems = restaurant?.menu || [];

    return (
        <div className="restaurant-menu">
            <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

            <div className="menu-header">
                {cloudinaryImageId && (
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                        alt={name}
                        className="menu-image"
                    />
                )}
                <div className="menu-info">
                    <h2>{name}</h2>
                    <p><strong>Cuisines:</strong> {cuisines?.join(", ")}</p>
                    <p><strong>Location:</strong> {locality}, {areaName}</p>
                    <p className={veg ? 'food-veg' : 'food-non-veg'}>
                        {veg ? "Vegetarian" : "Non-Vegetarian"}
                    </p>
                    <p><strong>Rating:</strong> ★ {avgRating}</p>
                    <p><strong>Total Ratings:</strong> {totalRatingsString}</p>
                    <p><strong>Time to Deliver:</strong> {sla?.slaString}</p>
                </div>
            </div>

            <div className="menu-items">
                <h3>Menu:</h3>
                <ul>
                    {menuItems?.length > 0 ? (
                        menuItems.map((item, idx) => (
                            <li key={idx}>{item?.name || "Menu Item"} - ₹{(item?.price / 100 || item?.defaultPrice / 100)}</li>
                        ))
                    ) : (
                        <>
                            <li>Biriyani</li>
                            <li>Pulao</li>
                            <li>Curd Rice</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;