import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiAppleLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <Container className="pt-5">
          <Row>
            <Col lg="3" md="3">
              <div className="footerWidget">
                <img src="images/logo-light.png" className="footerLogo" />
                <div className="footerAddress">
                  <p className="address">
                    تهران، خیابان سعادت آباد، خیابان کاج
                  </p>
                  <p className="phoneNum">02188888888</p>
                  <p className="emailAddress">info@learnup.com</p>
                </div>
              </div>
            </Col>
            <Col lg="2" md="3">
              <div className="footerWidget">
                <h4 className="widgetTitle">لینک مفید</h4>
                <ul className="footerMenu">
                  <li>
                    <Link className="linkWidget" to="">
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      سوالات متداول
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      تسویه حساب
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      تماس با ما
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      وبلاگ
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="3">
              <div className="footerWidget">
                <h4 className="widgetTitle">دسته بندی</h4>
                <ul className="footerMenu">
                  <li>
                    <Link className="linkWidget" to="">
                      طراحی وب
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      شبکه و امنیت
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      برنامه نویسی وب
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      پایگاه داده
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      برنامه نویسی موبایل
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="2" md="3">
              <div className="footerWidget">
                <h4 className="widgetTitle">راهنما و پشتیبانی</h4>
                <ul className="footerMenu">
                  <li>
                    <Link className="linkWidget" to="">
                      اسناد
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      چت آنلاین
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      ارسال ایمیل
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      قوانین و شرایط
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWidget" to="">
                      سوالات متواول
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3" md="12">
              <div className="footerWidget">
                <h4 className="widgetTitle">دانلود اپلیکیشن</h4>
                <Link to="" className="storeLink">
                  <div className="storeApp">
                    <div className="storeIconSection">
                      <IoLogoGooglePlaystore className="playStoreIcon"/>
                    </div>
                    <div className="storeCaps">
                      گوگل پلی
                      <span>دریافت اپلیکیشن</span>
                    </div>
                  </div>
                </Link>
                <Link to="" className="storeLink">
                  <div className="storeApp">
                    <div className="storeIconSection">
                      <PiAppleLogoBold className="playStoreIcon"/>
                    </div>
                    <div className="storeCaps">
                      اپ استور
                      <span>دریافت اپلیکیشن</span>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerBottom">
        <Container>
            <Row className="align-items-center  ">
                <Col lg='6' md='6'>
                    <p className="mb-0">© 2024 LearnUp ارائه شده توسط Daniel K-Tehrani</p>
                </Col>
                <Col lg='6' md='6' className="text-left">
                    <ul className="footerButtomSocial">
                        <li><FaFacebookF /></li>
                        <li><FiTwitter /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedinIn /></li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </div>
    </footer>
  );
}
