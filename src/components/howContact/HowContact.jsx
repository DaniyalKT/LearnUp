import React from "react";
import "./HowContact.css";
import TitlePages from "../../Utils/titlePages/TitlePages";
import { Col, Container, Row } from "react-bootstrap";
import { TfiHome } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { TfiMobile } from "react-icons/tfi";

export default function HowContact() {
  return (
    <div className="ContactContainer">
      <TitlePages titlePage="تماس با ما" titleAddress="تماس با ما" />

      <div className="contact">
        <Container>
          <Row>
            <Col lg="8" md="7">
              <div className="formContactWrap">
                <div className="formContactWrapHeader">
                  <h4>فرما ثبت نام</h4>
                </div>

                <form className="formContactWrapBody">
                  <Row>
                    <Col lg="6" md="12">
                      <div className="formGroup">
                        <label htmlFor="">نام کامل</label>
                        <input type="text" />
                      </div>
                    </Col>
                    <Col lg="6" md="12">
                      <div className="formGroup">
                        <label htmlFor="">ایمیل</label>
                        <input type="ایمیل" />
                      </div>
                    </Col>
                  </Row>

                  <div className="formGroup">
                    <label>عنوان</label>
                    <input type="text" />
                  </div>
                  <div className="formGroup">
                    <label>پیام</label>
                    <textarea></textarea>
                  </div>
                  <div className="formGroup">
                    <button>ارسال درخواست</button>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg="4" md="5">
              <div className="infoContactWrap">
                <div className="infoContactHeader">
                  <h4>راه های ارتباطی</h4>
                </div>
                <div className="infoContactBody">
                  <div className="contactInfo">
                    <p>
                      برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                      هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                    <div className="infoContactDetail">
                      <div className="detailIcon">
                        <TfiHome style={{fontSize: 35}}/>
                      </div>
                      <div className="detailContent">
                        <h4>آدرس ما</h4>
                        ایران ، تهران <br /> خیابان سعادت آباد ، <br /> خیابان
                        کاج شمال غربی
                      </div>
                    </div>
                    <div className="infoContactDetail">
                      <div className="detailIcon">
                        <TfiEmail style={{fontSize: 35}}/>
                      </div>
                      <div className="detailContent">
                        <h4>پست الکترونیکی</h4>
                        support@example.com <br /> example@gmail.com
                      </div>
                    </div>
                    <div className="infoContactDetail">
                      <div className="detailIcon">
                        <TfiMobile style={{fontSize: 35}}/>
                      </div>
                      <div className="detailContent">
                        <h4>شماره تماس</h4>
                        02188888888 <br /> 09360000000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
