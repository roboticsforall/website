import React from "react";
import { CountUp } from "use-count-up";

import { ColorThemes } from "@/colors";

export const VolOverviewStats: React.FC<{
  title: string;
  subtext: string;
  end: number;
}> = (props) => {
  const circleContainer: React.CSSProperties = {
    backgroundColor: ColorThemes.lightOrange,
    textAlign: "center",
  };
  const circleTitle: React.CSSProperties = {
  };
  const circleSubtext: React.CSSProperties = {
  };
  const statNumbers: React.CSSProperties = {
    color: "black",
  };
  return (
    <div className="rounded p-2" style={circleContainer}>
      <h3 style={circleTitle}>{props.title}</h3>
      <h1 style={statNumbers}>
        <CountUp end={props.end} start={1} isCounting />
      </h1>
      <h4 style={circleSubtext}>{props.subtext}</h4>
    </div>
  );
};
