import React, { useState } from "react";
import "./CourseLists.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Container, Row } from "react-bootstrap";
import ListFilter from "./listFilter/ListFilter";
import CourseBox from "./courseBox/CourseBox";
import { Col } from "react-bootstrap";
import { coursesData } from "../../datas";
import TitlePages from "../../Utils/titlePages/TitlePages";

export default function CourseLists() {
  let [coursesDataList, setCoursesDataList] = useState(coursesData);
  let [showFilterList, setShowFilterList] = useState();
  return (
    <>
      <div className="coursesContainer">
       
       <TitlePages titlePage='دوره های آموزشی' titleAddress="دوره های آموزشی"/>
   
        <Container>
          <div className="coursesfillter">
            <div className="showCount">
              <p>142 دوره آموزشی یافت شد</p>
            </div>
            <div className="fillterBtnSection">
              <select className="fillterSelection">
                <option value="popular">پر مخاطب</option>
                <option value="newest">جدید ترین</option>
                <option value="special">ویژه</option>
              </select>

              <button
                className="fillterButton"
                onClick={() => setShowFilterList("block")}
              >
                <FaArrowAltCircleLeft style={{ marginRight: 28 }} />
                باکس فیلتر
              </button>
            </div>
          </div>

          <div className="coursesSection">
            {coursesData.map((data) => (
              <Col lg="4" md="6">
                <CourseBox key={data.id} {...data} />
              </Col>
            ))}
          </div>

          <button className="reloadButton">
            <TfiReload style={{ marginLeft: 16 }} />
            فهرست کامل
          </button>
        </Container>
      </div>
      <ListFilter
        showFilterList={showFilterList}
        setShowFilterList={setShowFilterList}
      />
    </>
  );
}
