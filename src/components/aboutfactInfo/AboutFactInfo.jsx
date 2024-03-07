import React from "react";
import "./AboutFactInfo.css";
import TitlePages from "../../Utils/titlePages/TitlePages";
import { Col, Container } from "react-bootstrap";
import { TiDeviceDesktop } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { TfiHarddrives } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function AboutFactInfo() {
  return (
    <div className="aboutFactContainer">
      <TitlePages titlePage="درباره ما چه میگویند؟" titleAddress="درباره ما" />

      <Container>
        <div className="aboutFactWrapper">
            <div className="aboutFactsInfoSection">
              <div className="factListsWrap">
                <div className="headerFacts mb-3 f-24">
                  <h2>
                    مسیرهای <span>یادگیری</span> و مجموعه های آموزشی
                  </h2>
                </div>
                <div className="factLists">
                  <div className="listFactIcon">
                    <TiDeviceDesktop />
                  </div>
                  <div className="listFactCaption">
                    <h4>نظارت دقیق و ارزیابی عملکرد معلمان</h4>
                    <p>
                      هر کجای ایران یا دنیا که هستید، معلم های ما به صورت زنده
                      به شما تدریس می کنند.
                    </p>
                  </div>
                </div>
                <div className="factLists">
                  <div className="listFactIcon">
                    <CiHeart />
                  </div>
                  <div className="listFactCaption">
                    <h4>شفافیت قیمت و تضمین پایین‌ترین قیمت‌ها</h4>
                    <p>
                      در زمان ثبت درخواست امکان نحوه برگزاری کلاس بصورت حضوری یا
                      آنلاین وجود دارد.
                    </p>
                  </div>
                </div>
                <div className="factLists">
                  <div className="listFactIcon">
                    <TfiHarddrives />
                  </div>
                  <div className="listFactCaption">
                    <h4>امکان برگزاری کلاس بصورت حضوری یا آنلاین</h4>
                    <p>
                      از بین بیش از 2000 معلم فعال با استفاده از فیلتر‌ها بهترین
                      استاد متناسب با شرایط خود را بیابید.
                    </p>
                  </div>
                </div>
              </div>
              <NavLink to='/about'  className="aboutBtnSection">
                <span>درباره ما</span>
                 <span className="arrowLeftIcon">
                 <GoArrowLeft />
                 </span>
            </NavLink>
            </div>

            <div className="aboutFactsImgSection">
              <img src="images/edu.png" alt="" />
            </div>
        </div>
      </Container>
    </div>
  );
}
