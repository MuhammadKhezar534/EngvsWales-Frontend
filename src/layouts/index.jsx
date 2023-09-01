import { Outlet } from "react-router";
import BottomMenu from "../components/bottomMenu";
import "./styles.css";

const Layout = () => {
  return (
    <div className="backImg">
      <div
        style={{
          padding: "10px 22px",
          backgroundColor: "#fff",
        }}
      >
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
