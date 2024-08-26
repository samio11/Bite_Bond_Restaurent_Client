import {
    createBrowserRouter,
} from "react-router-dom";
import FixedElement from "../Components/FixedElement/FixedElement";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import Menu from "../Components/Menu/Menu";
import Dashboard from "../Components/Dashboards/Dashboard";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Statistics from "../Components/Dashboards/Statistics";
import AdminManageItem from "../Components/Dashboards/Admin/AdminManageItem";
import AllUser from "../Components/Dashboards/Admin/AllUser";
import ManageBooking from "../Components/Dashboards/Admin/ManageBooking";
import MyCart from "../Components/Dashboards/Guest/MyCart";
import PaymentHistory from "../Components/Dashboards/Guest/PaymentHistory";
const WebPaths = createBrowserRouter([
    {
        path: '/',
        element: <FixedElement></FixedElement>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/review',
                element: <Contact></Contact>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
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
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <Statistics></Statistics>
            },
            {
                path: 'manage-item',
                element: <AdminManageItem></AdminManageItem>
            },
            {
                path: 'all-user',
                element: <AllUser></AllUser>
            },
            {
                path: 'manage-booking',
                element: <ManageBooking></ManageBooking>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'my-payments',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])


export default WebPaths;