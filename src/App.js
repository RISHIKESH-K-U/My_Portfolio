import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./Introduction.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
