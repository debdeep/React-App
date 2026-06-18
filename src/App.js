import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Search from "./components/Search";
import Footer from "./components/Footer";
import RestaurantList from "./components/RestaurantList";
import restaurantList from './mocks/restaurantMockList';

console.log(restaurantList);


const App = () => (
    <div className="app-container">
        <header className="app-header">
            <Header name="Food on Wheels" />
        </header>
        <div className="app-body">
            <Search />
            <RestaurantList data={restaurantList} />
        </div>
        <footer className="app-footer">
            <Footer />
        </footer>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
