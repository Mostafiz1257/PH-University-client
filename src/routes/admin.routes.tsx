import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { CreateAdmin } from "../pages/admin/CreateAdmin";
import { CreateFaculty } from "../pages/admin/CreateFaculty";
import { CreateStudent } from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "academic semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "create-admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "create-faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "create-student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];
