import React from "react";
import { Image } from "react-bootstrap";

export const VolOverviewImg: React.FC<{
  color: string;
  title: string;
  image: string;
}> = (props) => {
  const cardTitle = {
    color: props.color,
  };
  return (
    <div>
      <Image fluid src={props.image} />
      <h2 className="text-center" style={cardTitle}>
        {props.title}
      </h2>
    </div>
  );
};
