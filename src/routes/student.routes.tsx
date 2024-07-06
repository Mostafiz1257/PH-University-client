import { OfferedCourse } from "../pages/student/OfferedCourse";
import { StudentDashboard } from "../pages/student/StudentDashboard";


export const studentsPaths = [
    {
        name:'Dashboard',
        path:'dashboard',
        element:<StudentDashboard></StudentDashboard>
    },
    {
        name:'offered-course',
        path:'offered-course',
        element:<OfferedCourse></OfferedCourse>
    }
]