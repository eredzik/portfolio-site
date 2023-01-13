import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={1000} distance="40px">
        <Row>
          <h1
            className="h1 display-4 text-info align-center text-center"
            style={{ wordWrap: "break-word" }}
          >
            UMIEJĘTNOŚCI
          </h1>
          <Col lg="6">
            {SkillBars.map((skill) => {
              return (
                <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.progressPercentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.Stack}
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <GreetingLottie animationPath="/lottie/build.json" />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;
