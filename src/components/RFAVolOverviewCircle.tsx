import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountUp } from "use-count-up";
export default function RFAVolOverviewCircle(props) {
  const circleText: React.CSSProperties = {
    borderRadius: "50%",
    backgroundColor: "#fcaf62",
    textAlign: "center",
    marginTop: props.top,
    height: props.height,
    width: props.width,
    paddingTop: props.paddingtop,
  };
  const circleTitle: React.CSSProperties = {
    fontFamily: "Mazzard-H-ExtraBold",
    fontSize: props.titleSize,
    lineHeight: "88%",
  };
  const circleSubtext: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
    fontSize: props.subtextSize,
    lineHeight: "88%",
  };
  const statNumbers: React.CSSProperties = {
    fontFamily: "Mazzard-H-Bold",
    fontSize: "5.4vmax",
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
}
