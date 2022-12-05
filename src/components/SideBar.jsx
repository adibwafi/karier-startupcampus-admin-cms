import { Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0654d4",
      cancelButtonColor: "#feb72b",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire("You have been logged out!");
        navigate(`/login`);
      }
    });
  };

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse position-absolute ps-4 pt-4"
      style={{minHeight: "100vh", maxWidth: "180px"}}
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <img
          src={
            process.env.PUBLIC_URL + "/assets/logos1.png"
          }
          width="100"
          height="35"
          className="d-inline-block align-top mb-3"
          alt="StartupCampus Logo"
          onClick={() => navigate(`/`)}
        />
        <ul className="nav flex-column d-flex justify-content-start ">
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin`)}
              className="nav-link text-black small p-1 mb-1"
            >
              <FaHome
                style={{ color: "#0654d4", size: "30rem", marginRight: "10px" }}
              />
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/list-job`)}
              className="nav-link text-black small p-1 mb-1"
            >
              <MdOutlineFastfood
                style={{ color: "#0654d4", size: "30rem", marginRight: "10px" }}
              />
              Job
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => navigate(`/admin/list-application`)}
              className="nav-link text-black small p-1 mb-1"
            >
              <FaShoppingCart
                style={{ color: "#0654d4", size: "30rem", marginRight: "10px" }}
              />
              Application
            </Nav.Link>
          </li>
          <li className="nav-item d-flex justify-content-start">
            <Nav.Link
              onClick={() => logOut()}
              className="nav-link text-black small p-1 mb-1"
              href="#login"
            >
              <SlLogout
                style={{ color: "#eca93b", size: "30rem", marginRight: "10px" }}
              />{" "}
              Sign Out
            </Nav.Link>
          </li>
        </ul>

        <ul className="nav flex-column d-flex justify-content-start mt-4">
          <li className="nav-item d-flex justify-content-start">
            Welcome, {localStorage.getItem("name")}!
          </li>
        </ul>


      </div>
    </nav>
  );
}

export default SideBar;
