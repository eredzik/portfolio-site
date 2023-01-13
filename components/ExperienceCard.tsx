import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { experience } from "../portfolio";

const ExperienceCard = ({ data }: { data: typeof experience[0] }) => {
  return (
    <Col lg="4">
      <Fade left duration={1000} distance="40px">
        <Card
          style={{ height: 550, marginBottom: 20 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <Color
            src={data.companylogo ? data.companylogo.src : data.companysvg}
            format="hex"
          >
            {(color) => (
              <>
                <div
                  style={{
                    background: color.data,
                    margin: 0,
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h5 className="text-white">{data.company}</h5>
                </div>
              </>
            )}
          </Color>
          <div className="py-5" style={{ flex: "1 1 auto", padding: "1.5rem" }}>
            <div
              className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.companylogo ? (
                  <Image
                    src={data.companylogo}
                    width={data.size || 90}
                    placeholder={data.companylogo ? "blur" : "empty"}
                    alt={data.role}
                  />
                ) : (
                  <img
                    src={data.companysvg}
                    style={{
                      height: "100px",
                      maxHeight: "100px",
                      maxWidth: "100px",
                    }}
                    alt={data.company}
                  />
                )}
              </div>
            </div>
            <div style={{ marginBottom: "0.5rem" }}>{data.role}</div>
            <div>{data.date}</div>
            <div
              className="description my-3 "
              style={{
                flexDirection: "column",
                fontSize: "0.875rem",
                flex: "grow",
              }}
            >
              {data.desc}
              <br />

              {data.skills
                ? data.skills.map((skill) => {
                    return (
                      <React.Fragment key={data.key + skill.skillName}>
                        <div
                          className="icon icon-lg icon-shape shadow rounded-circle mb-1"
                          id={skill.skillName}
                        >
                          <Icon icon={skill.fontAwesomeClassname} />
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </div>
                      </React.Fragment>
                    );
                  })
                : null}
            </div>
          </div>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
