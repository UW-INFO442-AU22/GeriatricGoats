import logo from "./img/logo.png"; // feel free to change
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"; // this is world-wide css, would overwrite bootstrap
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

// pages being imported
import { Home } from "./Home";
import { CommutingResources } from "./Commuting";
import { OtherResources } from "./OtherResources";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="commuting-resources" element={<CommutingResources />} />
        <Route path="other-resources" element={<OtherResources />} />
      </Routes>
    </div>
  );
}

export default App;
