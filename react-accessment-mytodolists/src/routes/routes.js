import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Todopage from '../pages/Todopage';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },

    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/todo',
        element: <Todopage/>
    },
    //   PARAM ???
    // {
    //     path: '/todo',
    //     element: <Todopage/>
    // },
    {
        path: '*',
        element: <Navigate to = '/login'/>
    },

])

function Router() {
    return <RouterProvider router={router}></RouterProvider>
}
export default Router