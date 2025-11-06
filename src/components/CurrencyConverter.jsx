// src/components/CurrencyConverter.jsx
import "./CurrencyConverter.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const convert = async () => {
    if (!amount) return setError("Please enter amount in INR");
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`/api/currency?amount=${amount}`);
      setResult(res.data);
    } catch {
      setError("Conversion failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="currency-page">
      <div className="converter-card">
        <h1 className="converter-title">💱 Currency Converter</h1>

        <div className="input-group">
          <label>Enter amount in INR</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 1000"
          />
        </div>

        <button onClick={convert} className="convert-btn">
          {loading ? "Converting..." : "Convert"}
        </button>

        {error && <p className="error">{error}</p>}

        {result && (
          <div className="result-section">
            <div className="result-box">
              <h2>{result.amountINR} INR</h2>
              <p>is equal to</p>
              <h3>{result.usd} USD</h3>
              <h3>{result.eur} EUR</h3>
              <p className="date">Last Updated: {result.ratesTimestamp}</p>
            </div>
          </div>
        )}

        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
