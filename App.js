import React from "react";
import ReactDOM from "react-dom/client";
//import AppLogo from "";

/* 
    <React.Fragment></React.Fragment> VS <></.>
    Both are similar while nesting  multiple JSX elements without adding extra DOM nodes but
    Explicit fragment - can accept key as props
    Shorthand fragment - can't accept key as props
*/
const Header = ({ name }) => (
    <>
        {/* <img src="./src/assets/logo.webp" alt="Food Camper Logo" /> */}
        <h1> {name} </h1>
    </>
);

const restaurantList = [{
    "info": {
        "id": "123456",
        "name": "Pizza Paradise",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
        "locality": "MG Road",
        "areaName": "Central District",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizza",
            "Italian",
            "Fast Food"
        ],
        "avgRating": 4.3,
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+ ratings",
        "veg": false,
        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.5,
            "slaString": "30 mins"
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        }
    }
}, {
    "info": {
        "id": "234567",
        "name": "Burger Hub",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
        "locality": "Park Street",
        "areaName": "Downtown",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Burgers",
            "American",
            "Fast Food"
        ],
        "avgRating": 4.5,
        "avgRatingString": "4.5",
        "totalRatingsString": "15K+ ratings",
        "veg": true,
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2,
            "slaString": "25 mins"
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        }
    }
}];

console.log(restaurantList);
// Assign default prop in case no header passed
Header.defaultProps = {
    name: 'Food truck App'
};

const Search = () => (
    <>
        <h2>Find restaurant:</h2>
        <input id="search" type="text" placeholder="Search By Restaurant Name.." />
    </>
)

const Footer = () => (
    <React.Fragment>
        <div><p> &copy; <i>wesbite developed and maintained by Debdeep&trade;, 2026 </i> </p></div>
        <div><a href="#top">Go to top.</a></div>
    </React.Fragment>

)
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

const App = () => (
    <div className="app-container">
        <header className="app-header">
            <Header name="Food on Wheels" />
        </header>
        <div className="app-body">
            <Search />
            <div className="cards-row">
                {restaurantList?.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} data={restaurant} className="res-card" />
                )
                )
                }
                {/* <RestaurantCard info={restaurantList[0].info}  />
                <RestaurantCard info={restaurantList[1].info} className="res-card" /> */}
            </div>
        </div>
        <footer className="app-footer">
            <Footer />
        </footer>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
