import React, { useState, useEffect } from "react";
import Search from "./Search";
import RestaurantList from "./RestaurantList";

const Body = () => {
    const [originalList, setOriginalList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (originalList.length > 0) return;

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

        getRestaurantData();
    }, [originalList.length]);

    return (
        <>
            <Search resListdata={filteredList} setFilteredList={setFilteredList} originalList={originalList} />
            <RestaurantList resListdata={filteredList} />
        </>
    );
};

export default Body;
