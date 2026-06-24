import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header'
import Footer from "./components/Footer";
import Body from "./components/Body";

//Routes
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <Header name="Food on Wheels" />
            </header>
            <main className="app-body">
                <Outlet />
            </main>
            <footer className="app-footer">
                <Footer />
            </footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
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
                path: '*',
                element: <Error />
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
