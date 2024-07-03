import { Children, ReactNode } from "react";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { CreateAdmin } from "../pages/admin/CreateAdmin";
import { CreateFaculty } from "../pages/admin/CreateFaculty";
import { CreateStudent } from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element?: ReactNode;
};

type TSideBarItem ={
  key:string,
  label:ReactNode,
  children?:TSideBarItem[]
}
 export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
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

export const adminSidebarItems = adminPaths.reduce((acc:TSideBarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

if(item.children){
  acc.push({
    key:item.name,
    label:item.name,
    children:item.children.map((child)=>({
      key:child.name,
      label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
    }))
  })
}

  return acc;
}, []);


