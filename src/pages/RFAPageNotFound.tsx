import React from "react";
import { RFAHeader } from "@/components/RFAHeader";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";

export const RFAPageNotFound: React.FC = () => {

  const redirectText = {
    fontFamily: "BeVietnam-SemiBold"
  }
  return (
    <>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Page Not Found"}
        description={
          "Oops... Looks like this page doesn't exist"
        }
      />
      <br/><br/><br/>
        <Container>
          <h4 style = {redirectText}>Link directed to is incorrect or webpage does not exist. <Link to = "/">Click here to return home</Link>.</h4>
        </Container>
      <br/><br/><br/>
    </>
  );
};
