import React from "react";
import { Container } from "react-bootstrap";
import { CountUp } from "use-count-up";

import { ColorThemes } from "@/colors";

export const VolOverviewCircle: React.FC<{
  width: string;
  height: string;
  subtextSize: string;
  titleSize: string;
  title: string;
  subtext: string;
  end: number;
}> = (props) => {
  const circleContainer: React.CSSProperties = {
    // borderRadius: "50%",
    backgroundColor: ColorThemes.lightOrange,
    textAlign: "center",
  };
  const circleTitle: React.CSSProperties = {
    fontFamily: "Mazzard-H-ExtraBold",
  };
  const circleSubtext: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
  };
  const statNumbers: React.CSSProperties = {
    fontFamily: "Mazzard-H-Bold",
    fontSize: "2.5em",
    color: "black",
  };
  return (
    <div className = "border p-2" style={circleContainer}>
      <h3 style={circleTitle}>{props.title}</h3>
      <div style={statNumbers}>
        <CountUp end={props.end} start={1} isCounting />
      </div>
      <h4 style={circleSubtext}>{props.subtext}</h4>
    </div>
  );
};
