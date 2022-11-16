import React, { useState, createContext } from "react";

export const TemaContexto = createContext();

const TemaContextoProvider = (props) => {
  const [esTemaOscuro, setEsTemaOscuro] = useState(false);

  const estilosTema = {
    color: esTemaOscuro ? "white" : "black",
    backgroundColor: esTemaOscuro ? "#292C35" : "white",
  };

  const manejadorDeTema = () => setEsTemaOscuro(!esTemaOscuro);

  const valoresDelTema = {
    esTemaOscuro: esTemaOscuro,
    estilosTema: estilosTema,
    manejadorDeTema: manejadorDeTema,
  };

  return (
    <TemaContexto.Provider value={valoresDelTema}>
      {props.children}
    </TemaContexto.Provider>
  );
};

export default TemaContextoProvider;
