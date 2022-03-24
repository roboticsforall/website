import React from "react";
import { Header } from "@/components/Header";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";

export const PageNotFound: React.FC = () => {
  const redirectText = {
  };
  return (
    <>
      <Header
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Page Not Found"}
        description={"Oops... Looks like this page doesn't exist"}
      />
      <br />
      <br />
      <br />
      <Container>
        <h4 style={redirectText}>
          Sorry, we can’t find the page that you are looking for. 
          Please ensure that you typed the link in correctly or {" "}
          <Link to="/"><em>click here to return home</em></Link>.
        </h4>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
