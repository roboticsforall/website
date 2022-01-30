import React from "react";
import { Image } from "react-bootstrap";

export const VolOverviewImg: React.FC<{
  color: string;
  title: string;
  image: string;
}> = (props) => {
  const cardTitle = {
    fontFamily: "Oswald-Medium",
    color: props.color,
  };
  return (
    <div>
      <Image fluid src={props.image} />
        <p className="text-center" style={cardTitle}>
          {props.title}
        </p>
    </div>
  );
};
