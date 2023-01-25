import AddUser from "../pages/AddUser";
import Edit from "../pages/Edit";
import Users from "../pages/Users";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element:<AddUser/>
            },
            {
                path:'/users',
                element: <Users/>

            },
            {
                path:'/edit',
                element: <Edit/>

            }
        ],
    }
])

export default routes;