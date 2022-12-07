import React from "react";
import { useReducer } from "react";
import { TYPES } from "./actions";
import ItemCarrito from "./ItemCarrito";
import Producto from "./Producto";
import { carritoInitialState, carritoReducer } from "./reducer";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);
  const { products, carrito } = state;

  const addToCart = (id) => {
    //console.log(id)
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = () => {};
  const cleanCart = () => {};

  //const mostrar=()=>console.log(products)

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Carrito de Compras</h1>
      <h2>Productos</h2>
      <div className="row">
        {products.map((producto) => {
          return (
            <Producto key={producto.id} data={producto} addToCart={addToCart} />
          );
        })}
      </div>
      <h2>Carrito</h2>
      <div className="row">
        {carrito.map((item, index) => {
          return <ItemCarrito key={index} data={item} />;
        })}
      </div>
      <button className="btn btn-warning">Limpiar</button>
    </div>
  );
};

export default Carrito;
