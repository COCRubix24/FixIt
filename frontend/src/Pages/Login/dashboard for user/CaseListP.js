import { useState } from "react";
import "./Dashboard.css";
import Headeruser from "./Headeruser";
import Sidebaruser from "./Sidebaruser";
import Mainuser from "./Mainuser";
import CaseLists from "./CaseLists";
import SidebarB from "./SidebarB";
// import CaseLists from "./CaseLists";
function CaseListP() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className="grid-container">
            {/* <Headeruser OpenSidebar={OpenSidebar} /> */}
            <SidebarB
                openSidebarToggle={openSidebarToggle}
                OpenSidebar={OpenSidebar}
            />
            <div className="case-lists-hai" style={{ height: "100%" }}>
                <CaseLists />
            </div>
        </div>
    );
}

export default CaseListP;
