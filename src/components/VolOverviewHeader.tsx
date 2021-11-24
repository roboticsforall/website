import React from "react";
import { VolOverviewCircle } from "./VolOverviewCircle";

export const VolOverviewHeader: React.FC<{
  title: string;
  description: string;
  image: string;
  headerTextColor: string;
}> = (props) => {
  const headerText: React.CSSProperties = {
    marginBottom: "4.5%",
    textAlign: "center",
    width: "100%",
    height: "24%",
  };
  const pageHeader: React.CSSProperties = {
    fontFamily: "Mazzard-H-Bold",
    fontSize: "5vw",
    transform: "rotate(358deg)",
    color: props.headerTextColor,
  };
  const headerBlob: React.CSSProperties = {
    paddingTop: "2vh",
    backgroundSize: "100% 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "45vw",
    backgroundImage: `url(${props.image})`,
  };
  const pageHeaderDescription: React.CSSProperties = {
    fontSize: "1.6vw",
    fontFamily: "BeVietnam-SemiBold",
  };
  const statCircles: React.CSSProperties = {
    justifySelf: "stretch",
    display: "flex",
    justifyContent: "space-around",
    width: "74%",
    height: "70%",
  };

  return (
    <div style={headerBlob}>
      <div style={statCircles}>
        <VolOverviewCircle
          align={"flex-end"}
          width={"16vw"}
          height={"16vw"}
          title={"Work With:"}
          subtext={"Levels of Curriculum"}
          end={12}
          subtextSize={"0.63em"}
          titleSize={"1em"}
        ></VolOverviewCircle>
        <VolOverviewCircle
          align={"flex-start"}
          width={"16vw"}
          height={"16vw"}
          title={"Join our:"}
          subtext={"Active Volunteers"}
          end={240}
          subtextSize={"0.65em"}
          titleSize={"1em"}
        ></VolOverviewCircle>
        <VolOverviewCircle
          align={"center"}
          width={"18vw"}
          height={"17vw"}
          title={"Support our:"}
          subtext={"Students Taught"}
          end={1296}
          subtextSize={"0.8em"}
          titleSize={"1.1em"}
        ></VolOverviewCircle>
      </div>

      <div style={headerText}>
        <div className="d-flex justify-content-center">
          <h1 style={pageHeader} className="text-center header-size">
            {props.title}
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <p
            style={pageHeaderDescription}
            className="text-center header-description-size"
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>

  );
};