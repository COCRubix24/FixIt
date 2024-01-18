import { useState } from "react";
import "./Dashboard.css";
import Headeruser from "./Headeruser";
// import Sidebaruser from "./Sidebaruser";
import Mainuser from "./Mainuser";
import SidebarB from "./SidebarB";
function DashboardB() {
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
            <Mainuser />
        </div>
    );
}

export default DashboardB;
