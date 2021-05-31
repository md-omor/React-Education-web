import React from "react";
import "./Nav.css";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Header_context";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(tempBtn);
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <div className="main__header">
      {/* header */}
      <div className="mian__perent_header">
        <div className="main__child_header">
          <div className="info__header">
            <p>Welcome</p>
            <p>FOLLOW US</p>
          </div>

          <div className="search__header">
            <input type="text" />
            <HiOutlineSearch className="header__search__icon" />
          </div>

          <div className="join__header">
            <Link to="/login" className="login">
              Register
            </Link>
            <Link to="/register" className="register">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* navbar */}

      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <Link to="/">
            <div className="nav-header">
              <img src={logo} className="nav-logo" alt="" />
              <button className="btn toggle-btn" onClick={openSidebar}>
                <FaBars />
              </button>
            </div>
          </Link>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Home
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Exams
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Pages
              </button>
            </li>

            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                About
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
