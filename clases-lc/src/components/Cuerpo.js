import React, { useContext } from "react";
import { TemaContexto } from "../providers/TemaContextoProvider";
import Lista from "./Lista";

const Cuerpo = () => {
  const { manejadorDeTema, esTemaOscuro, estilosTema } =
    useContext(TemaContexto);
  console.log("Es tema oscuro?", esTemaOscuro);

  return (
    <main style={estilosTema}>
      <Lista />
      <button onClick={manejadorDeTema} className="btn btn-warning btn-sm">
        Cambiar Tema
      </button>
    </main>
  );
};

export default Cuerpo;
