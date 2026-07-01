import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useLocation, Navigate } from "react-router-dom";

import Header from './components/Header'
import Footer from "./components/Footer";
import Body from "./components/Body";

//Routes
//import AboutUs from "./pages/AboutUs.jsx";
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
//import Contact from "./pages/Contact.jsx";
const Contact = lazy(() => import("./pages/Contact.jsx"));
import Login from "./pages/Login.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./pages/Error.jsx";

//redux imports
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

const isAuthenticated = () => typeof window !== "undefined" && localStorage.getItem("isLoggedIn") === "true";

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/home" replace /> : children;
};

const RootRedirect = () => {
    return <Navigate to={isAuthenticated() ? "/home" : "/login"} replace />;
};

const App = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/login";

    return (
        <Provider store={appStore}>
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
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <RootRedirect />
            },
            {
                path: 'login',
                element: <PublicRoute><Login /></PublicRoute>
            },
            {
                path: 'home',
                element: <ProtectedRoute><Body /></ProtectedRoute>
            },
            {
                path: 'about',
                element: <ProtectedRoute><Suspense fallback={<h2>About Us Loading....</h2>}><AboutUs /></Suspense></ProtectedRoute>
            },
            {
                path: 'contact',
                element: <ProtectedRoute><Suspense fallback={<h2>Contact Us Loading....</h2>}><Contact /></Suspense></ProtectedRoute>
            },
            {
                path: 'restaurant/:id',
                element: <ProtectedRoute><RestaurantMenu /></ProtectedRoute>
            },
            {
                path: 'cart',
                element: <ProtectedRoute><Cart /></ProtectedRoute>
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
