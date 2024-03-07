import React from "react";
import "./Header.css";
import Navbar from "./headerNav/Navbar";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation()

  return (
    <div >
      <div>
        <Navbar />
      </div>

      <div className={location.pathname == '/' ? 'headerWrapper headerContainer' : 'displayHeader'} >
        <div className="leftSection">
          <img className="eduLeftSection" src="images/edu.png" alt="" />
        </div>
        <div className="rightSection">
          <h1 className="titleSection">اولین وب سایت آموزشی آنلاین در ایران</h1>
          <p className="paragraphSection">
            هر موضوعی را در هر زمان مطالعه کنید. هزاران دوره آموزشی را با کمترین
            قیمت جستجو کنید!
          </p>
          <div className="searchBox">
            <img className="searchLogo" src="images/search.svg" alt="" />
            <input className="searchInput" placeholder="نام دوره آموزشی..." type="text" />
            <button className="searchBtn">جستجو</button>
          </div>
        </div>
      </div>
    </div>
  );
}
