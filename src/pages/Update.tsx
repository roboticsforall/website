import React, { useState } from "react";
import updatesJSON from "@/posts/updates.json";
import { ColorThemes } from "@/colors";
import { Alert, Fade } from "react-bootstrap";

export const Update: React.FC = () => {
  const [show, setShow] = useState(true);

    return (
      <>
        {(show && updatesJSON.updates) ? (
          <Alert variant="dark" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Important Update!</Alert.Heading>
            <hr/>
            <p>
              {updatesJSON.updates}
            </p>
          </Alert>
        ) : (<></>)}
      </>
    );
};
