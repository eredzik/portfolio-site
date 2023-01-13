import React, { Fragment } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { skillsSection, SkillIcon } from "../portfolio";
import { Icon } from "@iconify/react";
import { Navigation } from "swiper";
const SkillIcon = ({ skill }: { skill: SkillIcon }) => {
  return (
    <React.Fragment key={skill.skillName}>
      <div
        className="icon icon-lg icon-shape shadow rounded-circle"
        // style={{ flex: " 1 0 21%" margin }}
        id={skill.skillName}
      >
        {skill.fontAwesomeClassname ? (
          <Icon icon={skill.fontAwesomeClassname} />
        ) : skill.svg ? (
          <img src={skill.svg} alt={skill.skillName} style={{ maxWidth: 30 }} />
        ) : null}
      </div>
      <UncontrolledTooltip
        delay={0}
        placement="bottom"
        target={skill.skillName}
      >
        {skill.skillName}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};

const Skills = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <Container className="text-center my-5 ">
        <h2 className="h1" style={{ wordWrap: "break-word" }}>
          {skillsSection.title}
        </h2>

        <p className="lead">{skillsSection.subTitle}</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // pagination
          modules={[Navigation]}
        >
          {skillsSection.skills.map((skill) => {
            return (
              <SwiperSlide key={skill.header}>
                <h3>{skill.header}</h3>
                <p>{skill.description} </p>
                {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
                {skill.skillsUsed.map((icon) => {
                  return <SkillIcon skill={icon} key={icon.skillName} />;
                })}
                {/* </div> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Row> */}
        {/* <Col lg="6"> */}
        {/* <DisplayLottie animationPath="/lottie/webdev.json" /> */}
        {/* </Col> */}
        {/* <Col lg="6"> */}
        {/* <div className="d-flex justify-content-center flex-wrap mb-5"></div> */}
        {/* <div> */}
        {/* {skillsSection.skills.map((skill, i) => {
                return <p key={i}>{skill}</p>;
              })} */}
        {/* </div> */}
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </Fade>
  );
};

export default Skills;
