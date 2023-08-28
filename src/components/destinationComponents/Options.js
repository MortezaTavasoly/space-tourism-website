import React, { useEffect, useState } from "react";

export default function Options({ data }) {
  const [showOption, setShowOption] = useState("Moon");
  const [option, setOption] = useState(null);
  useEffect(() => {
    data.map((opt) => {
      if (opt.name === showOption) {
        setOption(opt);
      }
    });
  }, [showOption]);

  return (
    <div className="destination">
      <h5>
        <span>01 </span> pick your destination
      </h5>
      <div className="details">
        {option && (
          <div className="image">
            <img src={option.images.png} alt="moon" />
          </div>
        )}
        <div className="discription">
          <div className="options">
            <p
              className={showOption === "Moon" ? "active" : ""}
              onClick={() => setShowOption("Moon")}
            >
              MOON
            </p>
            <p
              className={showOption === "Mars" ? "active" : ""}
              onClick={() => setShowOption("Mars")}
            >
              MARS
            </p>
            <p
              className={showOption === "Europa" ? "active" : ""}
              onClick={() => setShowOption("Europa")}
            >
              EUROPA
            </p>
            <p
              className={showOption === "Titan" ? "active" : ""}
              onClick={() => setShowOption("Titan")}
            >
              TITAN
            </p>
          </div>
          <div className="about">
            {option && (
              <>
                <h1>{option.name}</h1>
                <p>{option.description}</p>
                <div className="line"></div>

                <div className="distance-time">
                  <div className="distance">
                    <p>AVG.DISTANCE</p>
                    <strong>{option.distance}</strong>
                  </div>
                  <div className="time">
                    <p>EST.TRAVEL TIME</p>
                    <strong>{option.travel}</strong>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
