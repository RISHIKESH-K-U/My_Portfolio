import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./Introduction.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
