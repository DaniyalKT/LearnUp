import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { TfiGoogle } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";

function Login({isShowLogin , setIsShowLogin}) {
  return (
    <Modal show={isShowLogin} onHide={() => setIsShowLogin(false)} style={{ direction: "rtl", maxWidth: "100%" }}>
      <VscChromeClose className="loginCloseIcon" onClick={() => setIsShowLogin(false)} />
      <Modal.Header className="LoginHeader">
        <Modal.Title>ورود به حساب</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 loginForm">
            <div className="loginFormGroup">
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                className="loginFormControl"
                type="text"
                placeholder="نام کاربری"
              />
            </div>
            <div className="loginFormGroup">
              <Form.Label>رمز عبور</Form.Label>
              <Form.Control
                className="loginFormControl"
                type="text"
                placeholder="********"
              />
            </div>

            <button className="loginSubmit">ورود به حساب</button>

            <div className="loginForgot">
              <ul className="loginCheckSave">
                <li>
                  <input id="saveIndo" type="checkbox" />
                  <label for="saveIndo">ذخیره رمزعبور</label>
                </li>
                <li>
                  <Link className="forgotedPassword">
                    رمز عبور خود را فراموش کرده اید؟
                  </Link>
                </li>
              </ul>
            </div>

            <div className="modalDividar">
              <span>یـا</span>
            </div>

            <div className="loginWithSocial">
              <ul>
                <li>
                  <button style={{background: '#ca3537'}}>Google <TfiGoogle /></button>
                </li>
                <li>
                  <button style={{background: '#3b5998'}}>Facebook <FaFacebookF /></button>
                </li>
              </ul>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
