import { useEffect } from "react";
import Options from "../../components/destinationComponents/Options";
import useDestination from "../../hooks/useDestination";
import "./destination.css";

export default function Destination() {
  useEffect(() => {
    const img = "url(background-destination-desktop.jpg)";
    document.body.style.backgroundImage = img;
  }, []);

  const url = "http://localhost:3000/destinations";
  const { data, error, isLoading } = useDestination(url);
  return (
    <div className="destination">
      {isLoading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && <Options data={data} />}
    </div>
  );
}
