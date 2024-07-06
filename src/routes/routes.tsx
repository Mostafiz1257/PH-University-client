import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentsPaths } from "./student.routes";
import { Login } from "../pages/login";

const router   = createBrowserRouter([
    {
        path:'/',
        element:<App></App>
    },
    {
        path:'/admin',
        element:<App/>,
        children : routeGenerator(adminPaths)

    },
    {
        path:'/faculty',
        element:<App/>,
        children : routeGenerator(facultyPaths)

    },
    {
        path:'/student',
        element:<App/>,
        children : routeGenerator(studentsPaths)

    },
    {
        path:'/login',
        element:<Login></Login>
    }
])


export default router

