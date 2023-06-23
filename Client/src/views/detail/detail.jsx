import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import "./detail.css";

function Detail() {
  const {id} = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail-container">
      <div className="img-container">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="details">
        <div>
          <h3>Especies:</h3>
          <p>{character.species}</p>
        </div>
        <div>
          <h3>Genero:</h3>
          <p>{character.gender}</p>
        </div>
        <div>
          <h3>estado:</h3>
          <p>{character.status}</p>
        </div>
        <div>
          <h3>Origen:</h3>
          <p>{character.origin?.name}</p>
        </div>
        <div>
          <h3>Localizacion:</h3>
          <p>{character.location?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
