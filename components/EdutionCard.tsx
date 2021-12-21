import React from "react";
import { Card, CardBody, Badge, CardTitle, CardSubtitle } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4 p-4">
				<CardTitle className="text-info">
					{education.schoolName}
				</CardTitle>
				<Badge color="info" className="m-2" style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
					{education.duration}
				</Badge>
				<CardSubtitle className="m-2">
					{education.subHeader}
				</CardSubtitle>
				<CardBody>
					{education.desc}
				</CardBody>
			</Card>
		</Fade >
	);
};

export default EdutionCard;
