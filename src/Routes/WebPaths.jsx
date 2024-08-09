import {
    createBrowserRouter,
  } from "react-router-dom";
import FixedElement from "../Components/FixedElement/FixedElement";
import Home from "../Components/Home/Home";
const WebPaths = createBrowserRouter([
    {
        path: '/',
        element: <FixedElement></FixedElement>,
        children:[
            {
                index: true,
                element: <Home></Home>
            }
        ]

    }
])
   

export default WebPaths;