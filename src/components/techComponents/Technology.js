import React, { useEffect, useState } from "react";

export default function Technology({ data }) {
  const [showTech, setShowTech] = useState("Launch vehicle");
  const [techs, setTechs] = useState(null);
  const [now, setNow] = useState(false);

  useEffect(() => {
    if (data !== null) {
      data.map((tec) => {
        if (tec.name === showTech) {
          setTechs(tec);
        } else {
          setNow(true);
        }
      });
    }
  }, [showTech, now]);

  return (
    <div className="technology">
      {now && (
        <>
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>
          <div className="discription">
            <div className="steps">
              <div
                className={
                  showTech === "Launch vehicle" ? "circle active" : "circle"
                }
                onClick={() => setShowTech("Launch vehicle")}
              >
                1
              </div>
              <div
                className={
                  showTech === "Spaceport" ? "circle active" : "circle"
                }
                onClick={() => setShowTech("Spaceport")}
              >
                2
              </div>
              <div
                className={
                  showTech === "Space capsule" ? "circle active" : "circle"
                }
                onClick={() => setShowTech("Space capsule")}
              >
                3
              </div>
            </div>
            <div className="texts">
              <p>THE TERMINOLOGY ...</p>
              <h3>{techs.name}</h3>
              <p>{techs.description}</p>
            </div>
            <div className="images">
              <img src={techs.images.portrait} alt="tech" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
