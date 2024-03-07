import React from "react";
import "./NewLatter.css";
import { Container } from "react-bootstrap";

export default function NewLatter() {
  return (
    <div className="newLatter">
        <div className="newLattarWrapper">
          <h2 className="newLatterText">به جامعه هزاران دانشجو بپیوندید!</h2>
          <p className="newLatterPhara">
            به جامعه میلیونی دانشجویان ما بپیوندید و به هزاران ساعت آموزش در
            حوزه‌های گوناگون دسترسی داشته باشید.
          </p>
          <form className="newLatterForm">
            <input
              type="email"
              className="newLatterInput"
              placeholder="ایمیل"
            />
            <button className="newLatterBtn">عضویت</button>
          </form>
        </div>
    </div>
  );
}
