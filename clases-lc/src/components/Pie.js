import React from "react";
import { useContext } from "react";
import { TemaContexto } from "../providers/TemaContextoProvider";

const Pie = () => {
  const { estilosTema, esTemaOscuro } = useContext(TemaContexto);

  return (
    <footer style={estilosTema}>
      <small>Numen 2022</small>
      {esTemaOscuro ? <h4>Tema Oscuro</h4> : <h4>Tema Claro</h4>}
    </footer>
  );
};

export default Pie;
