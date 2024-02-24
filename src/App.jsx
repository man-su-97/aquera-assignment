import { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "./components/PlanetCard";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchPlanets("https://swapi.dev/api/planets/");
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await axios.get(url);
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  const handlePageChange = (direction) => {
    const url = direction === "next" ? nextPage : prevPage;
    fetchPlanets(url);
  };

  console.log("Plnets --->", planets);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <div className="planets-container">
        {planets.map((planet) => (
          <PlanetCard key={planet.url} planet={planet} />
        ))}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        hasPrev={!!prevPage}
        hasNext={!!nextPage}
      />
    </div>
  );
};

export default App;
