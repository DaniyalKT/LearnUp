import React, { useEffect, useState } from "react";
import TitleSection from "../../Utils/titleSection/TitleSection";
import "./TeachersCourse.css";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { TiSocialGooglePlus } from "react-icons/ti";
import { LuBookOpen } from "react-icons/lu";
import { TfiUser } from "react-icons/tfi";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { teachersCoursesData } from "../../datas";
import Slider from "react-slick";

export default function TeachersCourse(props) {
  let [datas, setDatas] = useState(teachersCoursesData);
  let [autoplayCount, setAutoplayCount] = useState(4);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: autoplayCount,
    slidesToScroll: 1,
    autoplay: true,
 
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1400) {
        setAutoplayCount(3);
      }
      if (width <= 992) {
        setAutoplayCount(2);
      }
      if (width <= 768) {
        setAutoplayCount(1);
      }
      if (width > 1400) {
        setAutoplayCount(4);
      }
    };

    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{background: props.background}}>
    <Container className="mt-4"style={{overflowX: 'hidden'}} >
      <div className="title">
        <TitleSection
          section="اساتید برتر"
          title="دوره های ویژه با"
          titleSpan="مدرسان"
        />
      </div>

      <div className="slider-container teacherCourseContainer">
        <Slider {...settings}>
          {datas.map((data) => (
            <div className="teacherCourseWrapper ">
              <div className="teacherImgSection">
                <img src={data.img} alt={data.name} className="teacherImg" />
              </div>
              <div className="teacherInfoSection">
                <NavLink to="" className="link">
                  <h4 className="teachersName">{data.name}</h4>
                </NavLink>
                <span className="teachersSkills">{data.skill}</span>
              </div>
              <ul className="teachersSocial">
                <li className="teachrsSocialList twittre">
                  <CiTwitter />
                </li>
                <li className="teachrsSocialList googlePlus">
                  <TiSocialGooglePlus />
                </li>
                <li className="teachrsSocialList facebook">
                  <TiSocialFacebook />
                </li>
              </ul>

              <div className="coursesInfo">
                <ul className="coursesInfoUl">
                  <li className="coursesInfoList">
                    <TfiUser className="coursesInfoIcon" />
                    {data.studentCount} دانشجو
                  </li>
                  <li className="coursesInfoList">
                    <LuBookOpen className="coursesInfoIcon" />
                    {data.studentCount} دوره
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
    </div>
  );
}
