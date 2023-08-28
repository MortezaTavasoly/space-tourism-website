import "./App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Tech from "./pages/Tech/Tech";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <img src="./logo.svg" alt="logo" />
          <div className="line"></div>
          <div className="links">
            <NavLink to="/">
              <strong>00</strong> HOME
            </NavLink>
            <NavLink to="/destination">
              <strong>01</strong> DESTINATION
            </NavLink>
            <NavLink to="/crew">
              <strong>02</strong> CREW
            </NavLink>
            <NavLink to="/technology">
              <strong>03</strong> TECHNOLOGY
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
