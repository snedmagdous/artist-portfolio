// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./pages/Home/Home";
import About from "./pages/About/about"; // Import the new About page

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}