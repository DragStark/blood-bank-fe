import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  const role = () => {
    switch (user?.role) {
      case "donar":
        return "Người hiến";
      case "admin":
        return "Quản trị viên";
      case "hospital":
        return "Bệnh viện";
      case "organisation":
        return "tổ chức";
      default:
        return "";
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1 ">
            <Link to="/" className="nav-link">
              <BiDonateBlood color="red" /> Ngân Hàng Máu
            </Link>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Xin chào{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary">{role()}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Đăng Xuất
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
