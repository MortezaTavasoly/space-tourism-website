import React, { useEffect } from "react";
import CrewMembers from "../../components/crewComponents/CrewMembers";
import useDestination from "../../hooks/useDestination";
import "./crew.css";

export default function Crew() {
  useEffect(() => {
    const img = "url(background-crew-desktop.jpg)";
    document.body.style.backgroundImage = img;
  }, []);
  const url = "http://localhost:3000/crew";
  const { data, error, isLoading } = useDestination(url);
  return (
    <div className="crew">
      {isLoading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && <CrewMembers data={data} />}
    </div>
  );
}
