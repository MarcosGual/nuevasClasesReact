import React from "react";

const ItemCarrito = ({ data }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div className="col-md-12 d-flex flex-row justify-content-between mb-3">
      <h4>{nombre}</h4>
      <h5>$ {precio} x {cantidad} = $ {precio*cantidad}</h5>
      <button className="btn btn-warning btn-sm">Eliminar uno</button>
      <button className="btn btn-warning btn-sm">Eliminar todos</button>
    </div>
  );
};

export default ItemCarrito;
