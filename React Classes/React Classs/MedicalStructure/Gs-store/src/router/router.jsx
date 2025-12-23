import {createBrowserRouter} from "react-router";
import Login from "../auth/login/Login" ;
import Register from "../auth/register/Register" ;
import Product from "../component/Product";

const router = createBrowserRouter([
    {
        path: "/",
        // "is a default path. i.e , when no path is specified in the URL, this path will be used.
        element: <Login />
     
    },
    {
        path:"/Register",
        element: <Register />
    },

    {
        
    path:"/products",
    element: <Product/>

    }

       // "This is the parent route"
        // children: [{
        //     path:"/router/broee",
        //     element: <hello/>
        // }]
])

export default router;