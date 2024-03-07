import React from "react";
import "./HeaderNavMobile.css";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HeaderNavMobile({
  setActiveMobile,
  activeMobileMenu,
  setIsShowLogin,
  setIsShowRegister,
}) {
  const mobileHandler = () => {
    setActiveMobile("none");
  };

  return (
    <>
      <div
        className={
          activeMobileMenu == "block"
            ? "navMobileContainer displayBlock"
            : "navMobileContainer"
        }
      >
        <div className="crossSection nav-MobileBTN nav-MobileBTNColorRed">
          <ImCross onClick={mobileHandler} />
        </div>

        <nav className="mobileNav">
          <ul className="mobileUl">
            <li>
              <NavLink
                className={(Link) =>
                  Link.isActive ? "link mobileLinkActive" : "link"
                }
                to="/"
              >
                خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(Link) =>
                  Link.isActive ? "link mobileLinkActive" : "link"
                }
                to="/courses"
              >
                دوره های آموزشی
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(Link) =>
                  Link.isActive ? "link mobileLinkActive" : "link"
                }
                to="/about"
              >
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(Link) =>
                  Link.isActive ? "link mobileLinkActive" : "link"
                }
                to="/contact"
              >
                تماس با ما
              </NavLink>
            </li>
            <li className="showAccountSection">
              <Button variant="dark" onClick={() => setIsShowRegister(true)}>
                ثبت نام
              </Button>
              <Button onClick={() => setIsShowLogin(true)} variant="danger">
                ورود
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={
          activeMobileMenu == "block" ? "backGroundShadow" : "displayNone"
        }
      ></div>
    </>
  );
}
