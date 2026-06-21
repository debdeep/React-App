import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Search from "./components/Search";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";
//import restaurantList from './mocks/restaurantMockList';

//console.log(restaurantList);

const App = () => {
    const [originalList, setOriginalList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        try {
            const response = await fetch("https://namastedev.com/api/v1/listRestaurants");
            const data = await response.json();
            const restaurants = data?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log("dataFromAPI", restaurants);
            setOriginalList(restaurants);
            setFilteredList(restaurants);
        } catch (error) {
            console.error("Failed to load restaurants", error);
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <Header name="Food on Wheels" />
            </header>
            <div className="app-body">
                <Search resListdata={filteredList} setFilteredList={setFilteredList} originalList={originalList} />
                <RestaurantList resListdata={filteredList} />
            </div>
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
