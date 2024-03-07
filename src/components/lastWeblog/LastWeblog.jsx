import React, { useState } from "react";
import "./LastWeblog.css";
import { Col, Container, Row } from "react-bootstrap";
import { lastWeblogDatas } from "../../datas";

export default function LastWeblog() {
  let [weblogDatas, setWeblogDatas] = useState(lastWeblogDatas);
  return (
    <div className="lastWeblogContainer">
      <Container>
        <div className="lastWeblogTitle">
          <h2 className="weblogH2">آخرین وبلاگ</h2>
        </div>
        <div className="lastWeblogArticles">
          <Row>
            {weblogDatas.map((data) => (
              <Col lg="4" md="4" sm="12">
                <div className="articleStyle">
                  <div className="articleThumb">
                    <img src={data.img} alt={data.title} />
                  </div>
                  <div className="articleCaption">
                    <h4 className="articleCaptionTitle">{data.title}</h4>
                    <div className="articlesAuthor">
                      <div className="articlesAuthorImg">
                        <img src={data.authorsimg} alt={data.authorsName} />
                      </div>
                      <h4 className="articlesAuthorName">{data.authorsName}</h4>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
