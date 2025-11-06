// src/components/Home.jsx
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Weather Updates",
      image: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
      path: "/weather",
    },
    {
      title: "Currency Converter",
      image: "https://i.pinimg.com/1200x/74/19/20/74192083db265e339890d2bb3dd73e3e.jpg",
      path: "/currency",
    },
    {
      title: "Motivational Quotes",
      image: "https://i.pinimg.com/736x/98/a0/e7/98a0e7531ee1b262fa93ea9333e182b7.jpg",
      path: "/quotes",
    },
  ];

  return (
    <div className="home-container">
      <h1 className="main-title">Smart Utility Dashboard</h1>
      <div className="cards-container">
        {cards.map((card, i) => (
          <div
            key={i}
            className="info-card"
            onClick={() => navigate(card.path)}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
