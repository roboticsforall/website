import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RFAVolOverviewCircle from "./RFAVolOverviewCircle";

export default function RFAVolOverviewHeader(props) {
  const headerText: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
    bottom: "3vw",
  };
  const pageHeader: React.CSSProperties = {
    fontFamily: "Mazzard-H-Bold",
    transform: "rotate(358deg)",
    color: props.headerTextColor,
  };
  const headerBlob: React.CSSProperties = {
    backgroundSize: "100% 100%",
    height: "45vw",
    width: "100vw",
    backgroundImage: `url(${props.image})`,
  };
  const pageHeaderDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
  };
  const statCircles: React.CSSProperties = {
    paddingLeft: "5vmax",
  };

  return (
    <Row style={headerBlob}>
      <Container className="align-self-end">
        <Col>
          <Row style={statCircles}>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.3vmax"}
                  width={"16vmax"}
                  height={"16vmax"}
                  top={"-20vmax"}
                  title={"Work With:"}
                  subtext={"Levels of Curriculum"}
                  end={12}
                  subtextSize={"1.3vmax"}
                  titleSize={"2.1vmax"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.3vmax"}
                  width={"16vmax"}
                  height={"16vmax"}
                  top={"-32vmax"}
                  title={"Join our:"}
                  subtext={"Active Volunteers"}
                  end={221}
                  subtextSize={"1.3vmax"}
                  titleSize={"2.1vmax"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
            <Col>
              <div>
                <RFAVolOverviewCircle
                  paddingtop={"3.8vmax"}
                  width={"18vmax"}
                  height={"17vmax"}
                  top={"-23vmax"}
                  title={"Support our:"}
                  subtext={"Students Taught"}
                  end={1296}
                  subtextSize={"1.6vmax"}
                  titleSize={"2.4vmax"}
                ></RFAVolOverviewCircle>
              </div>
            </Col>
          </Row>

          <div className = "mb-5"style={headerText}>
            <Row className="justify-content-center">
              <h1 style={pageHeader} className="text-center header-size">
                {props.title}
              </h1>
            </Row>
            <Row className="justify-content-center">
              <p
                style={pageHeaderDescription}
                className="text-center header-description-size"
              >
                {props.description}
              </p>
            </Row>
          </div>
        </Col>
      </Container>
    </Row>
  );
}
