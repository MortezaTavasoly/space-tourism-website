import React, { useEffect, useState } from "react";

export default function CrewMembers({ data }) {
  const [showCrew, setShowCrew] = useState("Commander");
  const [crew, setCrew] = useState(null);
  const [now, setNow] = useState(false);

  useEffect(() => {
    if (data !== null) {
      data.map((crw) => {
        if (crw.role === showCrew) {
          setCrew(crw);
        } else {
          setNow(true);
        }
      });
    }
  }, [showCrew, now]);

  return (
    <div className="crew-sides">
      <div className="crew-info">
        <h5>
          <span>02</span> MEET YOUR CREW
        </h5>
        {now && (
          <>
            <strong>{crew.role}</strong>
            <h3>{crew.name}</h3>
            <p>{crew.bio}</p>
            <div className="crews">
              <div
                className={
                  showCrew === "Commander" ? "circle active" : "circle"
                }
                onClick={() => setShowCrew("Commander")}
              ></div>
              <div
                className={
                  showCrew === "Mission Specialist" ? "circle active" : "circle"
                }
                onClick={() => setShowCrew("Mission Specialist")}
              ></div>
              <div
                className={showCrew === "Pilot" ? "circle active" : "circle"}
                onClick={() => setShowCrew("Pilot")}
              ></div>
              <div
                className={
                  showCrew === "Flight Engineer" ? "circle active" : "circle"
                }
                onClick={() => setShowCrew("Flight Engineer")}
              ></div>
            </div>
          </>
        )}
      </div>
      <div className="images">
        {now && <img src={crew.images.png} alt="crew" />}
      </div>
    </div>
  );
}
