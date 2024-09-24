import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyFlights from "./pages/MyFlights";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-flights" element={<MyFlights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
