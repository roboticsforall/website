import React from "react";
import { CountUp } from "use-count-up";

import { ColorThemes } from "../colors";

export const RFAVolOverviewCircle: React.FC<{
  align: string;
  width: string;
  height: string;
  subtextSize: string;
  titleSize: string;
  title: string;
  subtext: string;
  end: number;
}> = (props) => {
  const circleText: React.CSSProperties = {
    alignSelf: props.align,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: ColorThemes.lightOrange,
    textAlign: "center",
    fontSize: "2vw",
    height: props.height,
    width: props.width,
  };
  const circleTitle: React.CSSProperties = {
    letterSpacing: "0.1vw",
    fontFamily: "Mazzard-H-ExtraBold",
    fontSize: props.titleSize,
    lineHeight: "88%",
  };
  const circleSubtext: React.CSSProperties = {
    width: "92%",
    fontFamily: "BeVietnam-SemiBold",
    letterSpacing: "0.1vw",
    fontSize: props.subtextSize,
    lineHeight: "88%",
  };
  const statNumbers: React.CSSProperties = {
    fontFamily: "Mazzard-H-Bold",
    fontSize: "2.5em",
    color: "black",
    lineHeight: "88%",
  };
  return (
    <div style={circleText}>
      <h3 style={circleTitle}>{props.title}</h3>
      <div style={statNumbers}>
        <CountUp end={props.end} start={1} isCounting />
      </div>
      <h4 style={circleSubtext}>{props.subtext}</h4>
    </div>
  );
};