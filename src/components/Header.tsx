import React from "react";

export const Header: React.FC<{
  headerTextColor: string;
  image: string;
  title: string;
  description: string;
}> = (props) => {
  const pageHeaderDescription = {
    fontFamily: "BeVietnam-SemiBold",
    fontWeight: 600,
    color: "black",
  };
  const pageHeader = {
    fontFamily: "Mazzard-H-Extrabold",
    color: props.headerTextColor,
  };
  const headerBlob = {
    backgroundSize: "100% 100%",
    height: "30vmax",
    // width: "100vw",
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={headerBlob}
    >
      <div>
        <h1 style={pageHeader} className="text-center">
          {props.title}
        </h1>
        <p
          style={pageHeaderDescription}
          className="text-center"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
