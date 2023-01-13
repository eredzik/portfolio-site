import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import { Icon } from "@iconify/react";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div
            className="shape shape-style-1 "
            style={{
              background: "linear-gradient(35deg, #11cdef 0, #1171ef 100%)",
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <Row>
              <Col lg="6">
                <h1 className="display-3 text-white">
                  {greetings.title + " "}
                </h1>
                <p className="lead text-white">{greetings.description}</p>
                <SocialLinks />
                <div className="btn-wrapper my-4">
                  <h2 className="display-4 text-white">Pobierz moje CV</h2>
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                    color="default"
                    href={greetings.resumeLinkEN}
                  >
                    <Icon icon={"cif:gb"} />
                    {/* <span className="btn-inner--text">
												ENGLISH VERSION
											</span> */}
                  </Button>
                  <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                    color="default"
                    href={greetings.resumeLinkPL}
                  >
                    <Icon icon={"cif:pl"} />
                    {/* <span className="btn-inner--text">
												WERSJA POLSKA
											</span> */}
                  </Button>
                </div>
              </Col>
              <Col lg="6">
                <GreetingLottie animationPath="/lottie/coding.json" />
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
