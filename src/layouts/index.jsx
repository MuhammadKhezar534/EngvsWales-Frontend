import { Outlet } from "react-router";
import BottomMenu from "../components/bottomMenu";

const Layout = () => {
  return (
    <>
      <div style={{ padding: "0 12px" }}>
        <Outlet />
      </div>
      <BottomMenu />
    </>
  );
};

export default Layout;
