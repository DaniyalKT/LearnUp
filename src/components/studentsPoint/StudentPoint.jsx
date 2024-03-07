import React, { useState } from "react";
import "./StudentPoint.css";
import TitleSection from "../../Utils/titleSection/TitleSection";
import { studentCommandData } from "../../datas";
import Slider from "react-slick";

export default function StudentPoint() {
  let [datas, setDatas] = useState(studentCommandData);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="studentPointsContainer">
      <TitleSection
        section="مردم چه می گویند؟"
        title="امتیازات دانشجویان"
        titleSpan="موفق"
        isChange="true"
      />
      <div className="slider-container">
        <Slider {...settings}>
          {datas.map((data) => (
            <div className="studentWrapper">
              <div className="clientDetailBox">
                <div className="pic">
                  <img src={data.img} alt={data.name} />
                </div>
                <div className="ClientDetail">
                  <h3>{data.name}</h3>
                  <span>{data.Skill}</span>
                </div>
              </div>

              <p className="description">{data.command}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
