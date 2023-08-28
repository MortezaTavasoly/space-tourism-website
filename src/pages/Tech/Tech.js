import React, { useEffect } from "react";
import Technology from "../../components/techComponents/Technology";
import useDestination from "../../hooks/useDestination";
import "./tech.css";
export default function Tech() {
  useEffect(() => {
    const img = "url(background-technology-desktop.jpg)";
    document.body.style.backgroundImage = img;
  }, []);
  const url = "http://localhost:3000/technology";
  const { data, error, isloading } = useDestination(url);

  return (
    <div>
      {isloading && <div>loading ...</div>}
      {error && <div>{error}</div>}
      {data && <Technology data={data} />}
    </div>
  );
}
