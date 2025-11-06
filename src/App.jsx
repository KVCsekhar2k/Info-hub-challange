// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherModule from "./components/WeatherModule";
import CurrencyConverter from "./components/CurrencyConverter";
import QuoteGenerator from "./components/QuoteGenerator";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherModule />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/quotes" element={<QuoteGenerator />} />
      </Routes>
    </Router>
  );
}
