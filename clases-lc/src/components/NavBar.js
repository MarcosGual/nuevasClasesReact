import React, { useContext } from "react";
import { TemaContexto } from "../providers/TemaContextoProvider";

const NavBar = () => {
  const titulo = "Bienvenidos a la clase de React N°";
  const nro = 4;
  const {estilosTema}=useContext(TemaContexto);

  return (
    <header style={estilosTema}>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <h2>{titulo} {nro}</h2>
    </header>
  );
};

export default NavBar;
