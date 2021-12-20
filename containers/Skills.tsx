import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";
import { Icon } from "@iconify/react";
const Skills = () => {
	return (
		<Fade bottom duration={1000} distance="40px">
			<Container className="text-center my-5 section section-lg">
				<h1 className="h1">{skillsSection.title}</h1>
				<p className="lead">{skillsSection.subTitle}</p>
				<Row>
					<Col lg="6">
						<DisplayLottie animationPath="/lottie/webdev.json" />
					</Col>
					<Col lg="6">
						<div className="d-flex justify-content-center flex-wrap mb-5">
							{skillsSection.softwareSkills.map((skill) => {
								return (
									<React.Fragment key={skill.skillName}>
										<div
											className="icon icon-lg icon-shape shadow rounded-circle mb-5"
											id={skill.skillName}
										>
											<Icon icon={skill.fontAwesomeClassname} />

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
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill, i) => {
								return <p key={i}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</Fade>
	);
};

export default Skills;
