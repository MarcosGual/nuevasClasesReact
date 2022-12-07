import React from "react";

const Producto = (props) => {
  const { data, addToCart } = props;

  return (
    <div className="col-sm-6 col-md-4">
      <h4>{data.nombre}</h4>
      <h5>$ {data.precio}</h5>
      <button
        onClick={() => addToCart(data.id)}
        className="btn btn-warning btn-sm"
      >
        Agregar
      </button>
    </div>
  );
};

export default Producto;
