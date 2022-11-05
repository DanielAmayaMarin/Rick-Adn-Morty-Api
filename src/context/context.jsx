import Axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const url = "https://rickandmortyapi.com/api/character/";
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [nexPage, setNexPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      Axios.get(url).then((response) => {
        if (response.status === 200) {
          console.log(response.data.results)
          setCharacters(response.data.results);
          setTotalResults(response.data.info);
          setNexPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setLoading(true);
        }
      });
    }, 2000);
  }, []);

  const gotPage = (page, e) => {
    setLoading(false);
    const type = e.target.dataset.type;
    switch (type) {
      case "prev":
        setActualPage(actualPage - 1);
        break;

      case "next":
        setActualPage(actualPage + 1);
        break;
      case "goTo":
        const number = e.target.value;
        page = `${url}?page=${number}`;
        setActualPage(number);
        break;
      default:
        return;
    }
    setTimeout(() => {
      Axios.get(page).then((response) => {
        if (response.status === 200) {
          setCharacters(response.data.results);
          setNexPage(response.data.info.next);
          setPrevPage(response.data.info.prev);
          setLoading(true);
        }
      });
    }, 500);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        actualPage,
        nexPage,
        prevPage,
        gotPage,
        loading,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
