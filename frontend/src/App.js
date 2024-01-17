import "./App.css";
import Login from "./Pages/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LP from "./Pages/Login/LP.js";

function App() {
    return (
        <UserProvider>
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<LP />} />
                        {/* <Route path="/docum" element={<Docum />} />
                        <Route path="/textsum" element={<Textsummarizer />} /> */}
                        {/* <Route path="/resource" element={<Resources />} /> */}
                        {/* <Route path="/lawyer" element={<Lawyerform />} />
                        <Route path="/lawyers" element={<Advocate />} /> */}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </>
        </UserProvider>
    );
}

export default App;
