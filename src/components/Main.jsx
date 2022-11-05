import { useContext } from "react";
import { CharactersContext } from "../context/context";

export const Main = () => {
  const { characters, loading } = useContext(CharactersContext);


  return (
    <>
      {loading ? (
        characters.map((character) => {
          return (
            <div className="col-3 mb-4" key={character.id}>
              <div className="card" id="tamaño">
                <img
                  srcSet={character.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Nombre:{" "}
                      <span className="text-uppercase">
                        {character.name.length > 12
                          ? `${character.name.substr(0, 8)}...`
                          : character.name}
                      </span>
                    </li>
                    <li className="list-group-item">
                    Estado: {character.status}
                    </li>
                    <li className="list-group-item">
                    Especie: {character.species}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};
