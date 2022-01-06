import React, { useState } from "react";
import updatesJSON from "@/posts/updates.json";
import { ColorThemes } from "@/colors";

export const Update: React.FC = () => {
  const [visibility, setVisibility] = useState<VisibilityState | undefined>(
    "visible"
  );

  const yellowRow = {
    backgroundColor: ColorThemes.gray,
  };
  const positioning: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    visibility: visibility,
  };
  const closeButton: React.CSSProperties = {
    fontSize: "xxx-large",
  };

  return (
    <div style={{ ...yellowRow, ...positioning }}>
      {updatesJSON.updates ? (
        <>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <p className="m-0">UPDATE:&nbsp;</p>
              <p className="m-0">{updatesJSON.updates}</p>
            </div>
            <button onClick={() => setVisibility("hidden")} style={closeButton}>
              &#215;
            </button>
          </div>
          <br />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
