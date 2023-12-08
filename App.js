import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

// it will lazily load our groceryService code dynamically on clicking the grocery
const GroceryService = lazy(() => import("./src/components/GroceryService"));


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
// createBrowserRouter([array_of_])
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/grocery",
                element: ( <Suspense fallback={<h2>Loading...</h2>}>
                    <GroceryService />
                </Suspense> )
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/home",
                element: <Body />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ]
    },
    
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);