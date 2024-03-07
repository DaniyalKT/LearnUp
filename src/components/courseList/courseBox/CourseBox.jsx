import React from "react";
import "./CourseBox.css";
import { CiCalendar } from "react-icons/ci";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CourseBox(props) {
  let { id, title, img, price, authorsName, authorsimg } = props;

  return (
    <div className="courseBoxContainer">
      <div className="courseImgSection">
        <img src={img} alt={title} className="courseBoxImg" />
      </div>
      <Link className="link" to={`/course/`+id}>
        <div className="courseBoxTitle">
          <h4>{title}</h4>
        </div>
      </Link>
      <div className="tagsSection">
        <ul className="coursesTagsList">
          <li className="tag1">متخصص</li>
          <li className="tag2">حرفه ای </li>
          <li className="tag3">طراحی وب</li>
        </ul>
      </div>
      <div className="courseBoxInfo">
        <div className="courseBoxInfo1">
          <ul>
            <li>5,69684 بازدید</li>
            <li className="theme-cl">306 ساعت</li>
          </ul>
        </div>
        <div className="courseBoxInfo2">
          <h3>{price} تومان</h3>
        </div>
      </div>

      <div className="CourseBoxFooterInfo">
        <div className="courseBoxFooterAuthor">
          <img src={authorsimg} alt={authorsName} />
          <h5>{authorsName}</h5>
        </div>
        <span className="courseBoxFooterTime">
          <CiCalendar style={{ marginLeft: 4, fontSize: 20 }} />1 روز پیش
        </span>
      </div>
    </div>
  );
}
