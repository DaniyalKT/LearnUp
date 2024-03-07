import React, { useState } from "react";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import HeaderNavMobile from "../headerNavMobile/HeaderNavMobile";
import Login from "../../login/Login";
import Register from "../../register/Register";

export default function Navbar() {
  let [navbar, setNavbar] = useState(false);
  let location = useLocation();
  let [activeMobileMenu, setActiveMobileMenu] = useState("");
  let [isShowLogin, setIsShowLogin] = useState(false);
  let [isShowRegister, setIsShowRegister] = useState(false);

  const stickyNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", stickyNavbar);
  return (
    <div
      className={
        navbar || location.pathname != "/"
          ? "navbarContainer navbarActive"
          : "navbarContainer "
      }
    >
      <button
        className={
          navbar || location.pathname != "/"
            ? "nav-MobileBTN nav-MobileBTNColorRed"
            : "nav-MobileBTN"
        }
      >
        <TiThMenu onClick={() => setActiveMobileMenu("block")} />
      </button>
      <div className="account">
        <Button
          variant={navbar || location.pathname != "/" ? "dark" : "primary"}
          onClick={()=>setIsShowRegister(true)}
        >
          ثبت نام
        </Button>
        <Button
          onClick={() => setIsShowLogin(true)}
          className="m-2"
          variant={
            navbar || location.pathname != "/" ? "outline-danger" : "danger"
          }
        >
          ورود
        </Button>
      </div>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink
              className={(link) =>
                link.isActive
                  ? "navLinkActivate"
                  : "" || navbar || location.pathname != "/"
                  ? "link linkActivate"
                  : "link"
              }
              to="/"
            >
              خانه
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              className={(link) =>
                link.isActive
                  ? "navLinkActivate"
                  : "" || navbar || location.pathname != "/"
                  ? "link linkActivate"
                  : "link"
              }
              to="/courses"
            >
              دوره های آموزشی
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              className={(link) =>
                link.isActive
                  ? "navLinkActivate"
                  : "" || navbar || location.pathname != "/"
                  ? "link linkActivate"
                  : "link"
              }
              to="/about"
            >
              درباره ما
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              className={(link) =>
                link.isActive
                  ? "navLinkActivate"
                  : "" || navbar || location.pathname != "/"
                  ? "link linkActivate"
                  : "link"
              }
              to="/contact"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img
          src={
            navbar || location.pathname != "/"
              ? "images/logo-dark.png"
              : "images/logo-light.png"
          }
          className="logoImg"
        />
      </div>

      <HeaderNavMobile
        activeMobileMenu={activeMobileMenu}
        setActiveMobile={setActiveMobileMenu}
        setIsShowLogin={setIsShowLogin}
        setIsShowRegister={setIsShowRegister}
      />
      <Login isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} />
      <Register isShowRegister={isShowRegister} setIsShowRegister={setIsShowRegister}/>
    </div>
  );
}
