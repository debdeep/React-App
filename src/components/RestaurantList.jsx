import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ data }) => (
    <div className="cards-row">
        {data?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} data={restaurant} className="res-card" />
        )
        )
        }
    </div>
)

export default RestaurantList;