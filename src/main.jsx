import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CharactersContextProvider } from "./context/context";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
    </CharactersContextProvider>
  </React.StrictMode>
);
