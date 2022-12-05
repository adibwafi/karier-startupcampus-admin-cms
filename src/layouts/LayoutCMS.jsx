import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <NavBarCMS /> */}
      {/* <div className="container-fluid"> */}
        <div className="d-flex" style={{minWidth: "100vw"}} >
          <SideBar />
          <div
            className="px-md-1"
            style={{
              minHeight: "100vh",
              width: "100vw",
              backgroundColor: "#0654d4",
              marginLeft: "180px"
            }}
          >
            <Outlet />
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
