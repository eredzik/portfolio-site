import React from "react";
import EdutionCard from "../components/EdutionCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Edution = () => {
	return (
		<section className="section pb-0 bg-gradient-info my-5">
			<Container>

				<h1
					className="display-3 text-white text-info text-center"
					style={{ wordWrap: "break-word" }}>
					<div className="mr-4 icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
						<i className="ni ni-books text-info" />
					</div>
					Wykształcenie
				</h1>
				{/* </div> */}
				<Row className="row-grid align-items-center">
					{educationInfo.map((info, i) => {
						return (
							<Col
								className="order-lg-1"
								lg="6"
								key={info.schoolName + i}
							>
								<EdutionCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</section >
	);
};

export default Edution;
