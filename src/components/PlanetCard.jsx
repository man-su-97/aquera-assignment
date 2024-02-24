import { useState, useEffect } from "react";
import axios from "axios";

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentData = await Promise.all(
        planet.residents.map((url) => axios.get(url))
      );
      setResidents(residentData.map((res) => res.data));
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>

      <h3>Residents</h3>
      <ul>
        {residents.map((resident) => (
          <li key={resident.url}>
            <p>Name: {resident.name}</p>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetCard;
