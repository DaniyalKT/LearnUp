import React from "react";
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import './ShortAbout.css'

export default function ShortAbout() {
  return (
    <div className="shortAbout">
      <div className="shortAboutImgSection">
        <img src="images/edu.png" className="shortAboutImg" />
      </div>
      <div className="shortAboutInfo">
        <h2 className="shortAboutTitle">مسیرهای <span className="titleSpan">یادگیری</span> و مجموعه های آموزشی</h2>
        <p className="shortAboutDescription">
        حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد  
        </p>
        <p className="shortAboutDescription">
           برای شرایط فعلی تکنولوژی مورد نیاز و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
          طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
        <div className="shortAboutFeaturs">
          <div className="shortFeaturInfo">
            <h1 className="countInfo">7+</h1>
            <p className="textInfo">ساعت آموزش</p>
          </div>

          <div className="shortFeaturInfo">
            <h1 className="countInfo">77</h1>
            <p className="textInfo">نفر دانشجو</p>
          </div>

          <div className="shortFeaturInfo">
            <h1 className="countInfo">84+</h1>
            <p className="textInfo">حوزه تخصصی</p>
          </div>
        </div>
            <NavLink to='/about'  className="aboutBtnSection">
                <span>درباره ما</span>
                 <span className="arrowLeftIcon">
                 <GoArrowLeft />
                 </span>
            </NavLink>
      </div>
    </div>
  );
}
