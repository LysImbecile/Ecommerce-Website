import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return(
    <Router>
      <Navbar />
    <div>
      <Routes>
    <Route path="/" element={< Home />} />
    </Routes>
    </div>
    </Router>
  );
}