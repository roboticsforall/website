import React, { useState } from "react";
import updatesJSON from "@/posts/updates.json";
import { Alert } from "react-bootstrap";

export const Update: React.FC = () => {
  const [show, setShow] = useState(true);

    return (
      <>
        {(show && updatesJSON.updates) ? (
          <Alert variant="info" onClose={() => setShow(false)} dismissible>
              {updatesJSON.updates}
          </Alert>
        ) : (<></>)}
      </>
    );
};
