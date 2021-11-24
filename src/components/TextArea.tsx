import React from "react";

export const TextArea: React.FC<{
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  rows: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}> = (props) => {
  const inputStyle = {
    borderRadius: 15,
    borderWidth: 1,
    fontFamily: "BeVietnam-ExtraBold",
    paddingLeft: "0.5em",
    fontSize: "1.2em",
    margin: "auto",
  };

  return (
    <textarea
      required
      style={inputStyle}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      rows={props.rows}
      className="w-100"
    ></textarea>
  );
};
