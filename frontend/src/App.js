import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Login from "./Pages/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.js";
// import { UserProvider } from "./context/UserContext";
import Documents from "./Pages/Login/Documents.js";
import LP from "./Pages/Login/LP.js";
import Help from "./Pages/Login/Help.js";
import Header from "./Pages/Login/dashboard for buiness/Header.jsx";
import Sidebar from "./Pages/Login/dashboard for buiness/Sidebar.jsx";
import Main from "./Pages/Login/dashboard for buiness/Main.jsx";
import Dashboard from "./Pages/Login/dashboard for buiness/Dashboard.jsx";
import DisplayCaseDetailsPage from "./Pages/Login/DisplayCaseDetailsPage.js";
import Thanks from "./Pages/Login/Thanks.js";
function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<LP />} />
                    <Route path="/docs" element={<Documents />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/case" element={<DisplayCaseDetailsPage />} />
                    <Route path="/thanks" element={<Thanks />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
