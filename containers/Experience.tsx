import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
	return (
		<section className="section section-lg">
			<Container className="text-center my-5 section section-lg">
				<Fade bottom duration={1000} distance="40px">
					<div className="p-1 pb-4">
						<div>
							<div className="icon  icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="ni ni-briefcase-24 text-info" />
							</div>
						</div>
						<div
							className="display-4 text-info align-center"
							style={{ wordWrap: "break-word", }}>
							DOŚWIADCZENIE
						</div>
					</div>
				</Fade>
				<Row className="row-grid align-items-center">
					{experience.map((data) => {

						return <ExperienceCard key={data.key} data={data} />;
					})}
				</Row>

			</Container>
		</section>
	);
};

export default Experience;
