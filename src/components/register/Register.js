import React from 'react'
import './Register.css'
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { TfiGoogle } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";

function Register({isShowRegister, setIsShowRegister}) {
  return (
    <Modal show={isShowRegister} onHide={() => setIsShowRegister(false)} style={{ direction: "rtl", maxWidth: "100%" }}>
    <VscChromeClose className="registerCloseIcon" onClick={() => setIsShowRegister(false)} />
    <Modal.Header className="registerHeader">
      <Modal.Title>ثبت نام</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3 registerForm">
          <div className="registerFormGroup">
            <Form.Control
              className="registerFormControl"
              type="text"
              placeholder="نام کامل"
            />
          </div>
          <div className="registerFormGroup">
            <Form.Control
              className="registerFormControl"
              type="text"
              placeholder="پست الکترونیکی"
            />
          </div>
          <div className="registerFormGroup">
            <Form.Control
              className="registerFormControl"
              type="text"
              placeholder="نام کاربری"
            />
          </div>
          <div className="registerFormGroup">
            <Form.Control
              className="registerFormControl"
              type="text"
              placeholder="*******"
            />
          </div>

          <button className="registerSubmit">ثبت نام</button>

     

          <div className="modalDividar">
            <span>یـا</span>
          </div>

          <div className="registerWithSocial">
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
  )
}

export default Register