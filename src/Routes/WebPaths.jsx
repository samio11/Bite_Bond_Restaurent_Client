import {
    createBrowserRouter,
  } from "react-router-dom";
import FixedElement from "../Components/FixedElement/FixedElement";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import Menu from "../Components/Menu/Menu";
import OurShop from "../Components/OurShop/OurShop";
import Dashboard from "../Components/Dashboards/Dashboard";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
const WebPaths = createBrowserRouter([
    {
        path: '/',
        element: <FixedElement></FixedElement>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop',
                element: <OurShop></OurShop>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])
   

export default WebPaths;