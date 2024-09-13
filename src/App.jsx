import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Map01 from "./pages/Map/Map01.jsx";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Sample React Application</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapping" element={<Map01 />} />
      </Routes>
    </div>
  );
}

export default App;
