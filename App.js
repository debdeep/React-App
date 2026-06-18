import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./src/assets/logo.webp";

const Header = () => (
    <div>
        <img src={AppLogo} alt="App Logo" />
        <h1> Wecome to Food on Wheels</h1>
    </div>

);

const Search = () => (
    <input id="search" type="text" placeholder="Search By restaurant Name.." />
)

const Footer = () => (
    <div>
        <div><p> &copy; developed and maintained by Debdeep&trade;, 2026 </p></div>
        <div><a href="#top">Go to top.</a></div>
    </div>

)

const RestaurantCard = ({ className = "" }) => (
    <div className={`card ${className}`.trim()}>
        <h2>Biriyani By Kilo</h2>
        <div>Cuisines: Chinese, Indian</div>
        <div>Ratings: 4.0</div>
    </div>
)

const App = () => (
    <div className="app-container">
        <header className="app-header">
            <Header />
        </header>
        <div className="app-body">
            <Search />
            <div className="cards-row">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
        <footer className="app-footer">
            <Footer />
        </footer>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
