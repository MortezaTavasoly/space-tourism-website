import React, { useEffect } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const img = "url(background-home-desktop.jpg)";
    document.body.style.backgroundImage = img;
  }, []);
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="texts">
        <h5>So, you want to travel to </h5>
        <h1 className="space">SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div
        className="explore"
        onClick={() => {
          navigate("/destination");
        }}
      >
        explore
      </div>
    </div>
  );
}
