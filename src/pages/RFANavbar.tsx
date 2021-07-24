import React from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { RFANavbarDesktop } from "./RFANavbarDesktop";
import { RFANavbarMobile } from "./RFANavbarMobile";

export const RFANavbar: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
    })
    return (
        <div>
            {(width <= 980 ? <RFANavbarMobile/> : <RFANavbarDesktop/>)}
        </div>
    );
};
