import { noConflict } from "lodash";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Galaxy from "../../Galaxy/Galaxy";
import one from "../../../images/1.png";
import two from "../../../images/2.png";
import three from "../../../images/3.png";
import four from "../../../images/4.png";


import "./instagram.css";

const data = [
  {
    title: "01",
    subtitle: "create",
    text: "sign up & create your own store in under 30 seconds",
    img: "https://www.hypd.store/img/CREATE.b2e4027d.png",
  },
  {
    title: "02",
    subtitle: "curate",
    text: "curate collections, add your favourite products or simply make your content shop-able",
    img: "https://dummyimage.com/157x314/ddd/fff",
  },
  {
    title: "03",
    subtitle: "share",
    text: "share your store link, collections & your product recommendations across all your social media channels.",
    img: "https://www.hypd.store/img/CREATE.b2e4027d.png",
  },
  {
    title: "04",
    subtitle: "ka-ching!",
    text: "earn real money every time someone buys anything from your store",
    img: "https://dummyimage.com/157x314/ddd/fff",
  },
];

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 3000;
      setScroll(window.scrollY);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

export default function Instagram() {
  const scroll = useScrollHandler();
  return (
    <>
      <section className="instagram">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-title1">
                <h2 className="title">
                  as easy as setting up an instagram account. only {""}
                  <span
                    style={{
                      fontWeight: "600",
                      background:
                        "-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)",
                      webkitBackgroundClip: "text",
                      webkitTextFillColor: "transparent",
                    }}
                  >
                    more
                  </span>{" "}
                  rewarding
                </h2>
              </div>
            </Col>
          </Row>
          <div className="screen-wrapper">
            <div
              className="info-section-wrapper"
              style={{ color: scroll ? "red" : "green" }}
            >
              {data.map((datas) => (
                <div className="mobile-info-container">
                  <div className="mobile-info title-animation">
                    <div
                      className="index"
                      style={{ background: "rgb(151, 86, 215)" }}
                    >
                      {datas.title}
                    </div>
                    <div className="mobile-info-name">{datas.subtitle}</div>
                    <div className="mobile-info-description">{datas.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mock-screen">
              <div className="mobile">
                <div className="mobile-background">
                  {scroll > 2500 && scroll < 4000 ? (
                    <>
                      <img src={one} className="mock-screen-img" alt=""/>
                    </>
                  ) : scroll > 4201 && scroll < 4800 ? (
                    <img src={two} className="mock-screen-img" alt=""/>
                  ) : scroll > 4801 && scroll < 5000 ? (
                    <img
                      src="/assets/images/whatsup1.jpeg"
                      className="mock-screen-img" alt=""
                    />
                  ) : scroll > 5000 && scroll < 7000 ? (
                    <img src={three} className="mock-screen-img" alt="" />
                  ) : (
                    <img src={four} className="mock-screen-img" alt=""/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
