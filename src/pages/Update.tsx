import React from "react";
import { Container, Row } from "react-bootstrap";

import { ColorThemes } from "@/colors";


export const Update: React.FC = () => {
    const yellowRow = {
        backgroundColor: ColorThemes.gray,
    }
    const positioning: React.CSSProperties = {
        position: "absolute",
        width: "100%",
    }
    return (
        <div style={{...yellowRow, ...positioning}}>
            <br/>
                <div className = "d-flex align-items-center">
                    <h4 className="m-0">UPDATE:&nbsp;</h4>
                    <h4 className="m-0"> Some Update Some Update Some Update Some Update Some Update Some Update Some Update Some Update Some Update Some Update</h4>
                </div>
            <br/>
        </div>
    );
};
