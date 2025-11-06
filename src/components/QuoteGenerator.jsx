// src/components/QuoteGenerator.jsx
import "./QuoteGenerator.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getQuote = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get("/api/quote");
      setQuote(res.data.quote);
    } catch {
      setError("Failed to fetch quote. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-page">
      <div className="quote-card">
        <h1 className="quote-title">💡 Inspirational Quotes</h1>

        <div className="quote-box">
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
          {quote ? (
            <>
              <p className="quote-text">“{quote.text}”</p>
              <p className="quote-author">— {quote.author}</p>
            </>
          ) : (
            <p className="placeholder">Click below to get inspired!</p>
          )}
        </div>

        <button onClick={getQuote} className="new-quote-btn">
          {loading ? "Fetching..." : "✨ New Quote"}
        </button>

        <button className="back-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
