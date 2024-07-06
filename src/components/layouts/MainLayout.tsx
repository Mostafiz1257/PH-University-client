import { Layout, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Menu } from "antd";

import { Outlet } from "react-router-dom";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import Sidebar from "./Sidebar";

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: "Dashboard",
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       { key: 21, label: "Create Admin" },
//       { key: 22, label: "Create Faculty" },
//       { key: 23, label: "Create Student" },
//     ],
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
     <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
