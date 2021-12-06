import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return <div>{width <= 980 ? <NavbarMobile /> : <NavbarDesktop />}</div>;
};
