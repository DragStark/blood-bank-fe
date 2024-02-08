import React from "react";
// import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
  //GET USER STATE
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Ca hiến/nhận máu</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Người hiến/nhận</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Bệnh viện</Link>
              </div>
            </>
          )}
          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donar-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">DS người hiến/nhận</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">DS bệnh viện</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">DS tổ chức</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div
              className={`menu-item ${
                location.pathname === "/orgnaisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/orgnaisation">Danh sách</Link>
            </div>
          )}
          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Ca hiến/nhận</Link>
            </div>
          )}
          {user?.role === "donar" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Ca Hiến Máu</Link>
            </div>
          )}
          {(user?.role === "donar" || user?.role === "hospital" || user?.role === "organisation") && (
            <div
              className={`menu-item ${location.pathname === "/analytics" && "active"}`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/analytics">Quản lí máu</Link>
            </div>
          )}
          {/* {userMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                className={`menu-item ${isActive && "active"}`}
                key={menu.name}
              >
                <i className={menu.icon}></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
