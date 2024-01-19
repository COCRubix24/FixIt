import { useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Category from "./Category";

function CategoryPage() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className="grid-container">
            {/* <Header OpenSidebar={Category} /> */}
            <Sidebar
                openSidebarToggle={openSidebarToggle}
                OpenSidebar={OpenSidebar}
            />
            <Category />
        </div>
    );
}

export default CategoryPage;
