import React, { useState } from "react";
import "./SuggestedCourses.css";
import { Col, Container, Row } from "react-bootstrap";
import { suggestedCoursesData } from "../../datas";
import { TfiVideoClapper } from "react-icons/tfi";

export default function SuggestedCourses() {
  let [suggestedData, setSuggestedData] = useState(suggestedCoursesData);

  return (
    <div className="suggested">
      <Container className="pt-5">
        <div className="suggestedTitleSection">
          <p className="suggestedText">دسته بندی های منتخب</p>
          <h2 className="suggestedTitle">
            دوره های <span className="suggestedTitleSpan">پیشنهادی</span>{" "}
            جشنواره
          </h2>
        </div>
          <Row className="suggestedSection">
            {suggestedData.map((courses) => (
              <Col className="courseSection" lg="4" md="5" sm="6">
                <div className="course" style={{backgroundColor: `rgba(${courses.bgColor})`}}>
                <div className="courseImgsection">
                  <img
                    className="courseImg"
                    src={courses.img}
                  />
                </div>
                <div className="courseDivText">
                  <h3 className="courseTitle">{courses.title}</h3>
                  <p className="courseCount">
                    <TfiVideoClapper className="m-2" />
                    {courses.countCourses}
                  </p>
                </div>
                </div>
            </Col>
            ))}
          </Row>
      </Container>
    </div>
  );
}
