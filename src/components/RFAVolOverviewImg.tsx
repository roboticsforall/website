import React from "react";
import { Image } from "react-bootstrap";

export const RFAVolOverviewImg: React.FC<{
  color: string,
  title: string,
  image: string,
}> = (props) => {
  const cardTitle = {
    fontFamily: "Oswald-Medium",
    fontSize: "2.5vmax",
    color: props.color,
  };
  const overviewImgSize = {
    width: "18vmax",
  };
  return (
    <div>
      <Image style={overviewImgSize} src={props.image} />
      <p className="text-center" style={cardTitle}>
        {props.title}
      </p>
    </div>
  );
};
