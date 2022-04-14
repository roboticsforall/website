import React from "react";
import Button from "react-bootstrap/Button";

export const NewsCard: React.FC<{
  file: string;
  title: string;
  variant: string;
}> = (props) => {
  return (
    <Button
      target="_blank"
      rel="noreferrer"
      href={props.file}
      className="w-100 border-0"
      variant={props.variant}
      download
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>{props.title}</h3>
    </Button>
  );
};
