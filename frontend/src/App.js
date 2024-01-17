import './App.css';
import Login from './Pages/Login/Login.js'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.js'
import Home from './Components/landing page/Home.jsx'
import Contact from './Components/landing page/Contact.jsx'
import About from './Components/landing page/About.jsx'
import Work from './Components/landing page/Work.jsx'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Home/>
        <About />
        <Work />
        <Contact />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

