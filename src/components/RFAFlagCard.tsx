import React from "react";
import { Image } from "react-bootstrap";

export const RFAFlagCard: React.FC<{
  link: string;
  title: string;
  image: string;
}> = (props) => {
  const imageSize: React.CSSProperties = {
    height: "11vmax",
  };
  const text: React.CSSProperties = {
    fontFamily: "BeVietnam-Bold",
  };

  return (
    <a className="hyperlink" target="_blank" href={props.link} rel="noreferrer">
      <div className="m-3 text-center">
        <Image style={imageSize} src={props.image} />
        <h3 style={text} className="mb-4 text-center">
          {props.title}
        </h3>
      </div>
    </a>
  );
};
