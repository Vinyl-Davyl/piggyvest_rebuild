import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
