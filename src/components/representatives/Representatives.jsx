import React, { useState , useEffect} from "react";
import TitleSection from "../../Utils/titleSection/TitleSection";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Representatives.css";
import { representativesDatas } from "../../datas";

export default function Representatives() {
  let [datas, setDatas] = useState(representativesDatas);
  let [autoplayCount, setAutoplayCount] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: autoplayCount,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 958) {
        setAutoplayCount(3);
      }
      if (width <= 769) {
        setAutoplayCount(2);
      }
      if (width <= 476) {
        setAutoplayCount(1);
      }
      if (width > 958) {
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
    <Container>
      <TitleSection
        title="نمایندگان مورد "
        titleSpan="اعتماد ما"
        section="آموزشگاه های معتبر"
      />

      <Row>
        <Col lg="12" md="12" style={{height: '150px'}}>
          <div className="slider-container">
            <Slider {...settings}>
              {datas.map((data) => (
                <div key={data.id} className="repWrapper">
                  <img src={data.img} />
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
