import React from "react";
import Button from "react-bootstrap/Button";

export const ButtonFullWidth: React.FC<{
  location: string;
  title: string;
  variant: string;
}> = (props) => {
  return (
    <Button
      target="_blank"
      rel="noreferrer"
      href={props.location}
      className="w-100 border-0"
      variant={props.variant}
    >
      <h3>{props.title}</h3>
    </Button>
  );
};
