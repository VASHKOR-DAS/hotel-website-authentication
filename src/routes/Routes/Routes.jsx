import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import SingleRoom from "../../Pages/Cards/SingleRoom";
import CoupleRoom from "../../Pages/Cards/CoupleRoom";
import FamilyRoom from "../../Pages/Cards/FamilyRoom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/single',
                element: <SingleRoom></SingleRoom>
            },
            {
                path: '/couple',
                element: <PrivateRoute><CoupleRoom></CoupleRoom></PrivateRoute>
            },
            {
                path: '/family',
                element: <FamilyRoom></FamilyRoom>
            }
        ]
    }
])