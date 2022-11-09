import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"; // this is world-wide css, would overwrite bootstrap
import { Route, Routes } from "react-router-dom";
import Header from "./Header"; // keep if sidebar menu is implemented
import { Footer } from "./Footer";

// pages being imported
import { Home } from "./Home";
import { Alerts } from "./Alerts";
import { Commute } from "./Commute";
import { Safety } from "./Safety";

export function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="commute" element={<Commute />} />
        <Route path="safety" element={<Safety />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
