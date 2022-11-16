import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"; // Global css overwriting bootstrap
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";
import { Home } from "./Home";
import { Alerts } from "./Alerts";
import { Commute } from "./Commute";
import { Safety } from "./Safety";
import { AboutUs } from "./About";
import { LogIn } from "./LogIn";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="commute" element={<Commute />} />
        <Route path="safety" element={<Safety />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="log-in" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;