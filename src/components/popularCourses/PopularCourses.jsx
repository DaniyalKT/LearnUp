import React, { useState } from "react";
import "./PopularCourses.css";
import TitleSection from "../../Utils/titleSection/TitleSection";
import { Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { TfiControlSkipForward } from "react-icons/tfi";
import { popularCoursesData } from "../../datas";
import { NavLink } from "react-router-dom";

export default function PopularCourses() {
  let [coursesData, setCoursesData] = useState(popularCoursesData);

  return (
    <div className="popularCourses">
      <TitleSection
        section="دسته بندی های منتخب"
        title=" محبوب ترین"
        titleSpan="دوره ها"
      />

      <div className="popularRowSection">
        {coursesData.map((course) => (
          <Col
            key={course.id}
            xl="6"
            lg="12"
            md="12"
            sm="12"
            className="popularSection"
          >
            <div className="popularCoursesSection">
              <div className="popularImgSection">
                <NavLink to={`/course/${course.id}`} className="link">
                  <img
                    src={course.courseImg}
                    alt={course.title}
                    className="popularImg"
                  />
                </NavLink>
              </div>
              <div className="popularDescriptionSection">
                <div className="popularDescription">
                  <NavLink to={`/course/${course.id}`} className="link">
                    <h4 className="popularTitle">{course.title}</h4>
                  </NavLink>
                  <div className="starRaiting">
                    <div className="starPoint">
                      <StarRatings
                        rating={course.score}
                        starRatedColor="#FF9800"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="1px"
                      />
                      <h5 className="starCountH5">{course.score}</h5>
                    </div>
                    <h6 className="starCountH6">(2500 امتیاز ثبت شد)</h6>
                  </div>
                  <div className="popularPriceSection">
                    {course.price}ت
                    {course.offPrice === 0 ? (
                      <div className="lessOffer"> </div>
                    ) : (
                      <div className="lessOffer">{course.offPrice}ت</div>
                    )}
                  </div>
                </div>
                <div className="popularCoursesInfoSection">
                  <div className="popularTeacherSection">
                    <img
                      src={course.teacherImg}
                      alt=""
                      className="popularTeacherImg"
                    />
                    <NavLink to="" className="link">
                      <h5 className="popularTeacherName">
                        {course.teacherName}
                      </h5>
                    </NavLink>
                  </div>
                  <div className="popularCoursesInfo">
                    <TfiControlSkipForward className="skipStyleIcon" />
                    {course.numOfCourse} دوره
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
}
