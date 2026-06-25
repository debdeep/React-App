import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

import Header from './components/Header'
import Footer from "./components/Footer";
import Body from "./components/Body";

//Routes
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/";

    return (
        <div className="app-container">
            {!hideLayout && (
                <header className="app-header">
                    <Header name="Food on Wheels" />
                </header>
            )}
            <main className="app-body">
                <Outlet />  {/* Child routes render here */}
            </main>
            {!hideLayout && (
                <footer className="app-footer">
                    <Footer />
                </footer>
            )}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: 'home',
                element: <Body />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'restaurant/:id',
                element: <RestaurantMenu />
            },
            {
                path: '*',
                element: <Error />
            }
        ],
        errorElement: <Error />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
