import { TYPES } from "./actions";

export const carritoInitialState = {
  products: [
    { id: 1, nombre: "Producto A", precio: 500, cantidad: 1 },
    { id: 2, nombre: "Producto B", precio: 800, cantidad: 1 },
    { id: 3, nombre: "Producto C", precio: 950, cantidad: 1 },
    { id: 4, nombre: "Producto D", precio: 150, cantidad: 1 },
    { id: 5, nombre: "Producto E", precio: 320, cantidad: 1 },
    { id: 6, nombre: "Producto F", precio: 790, cantidad: 1 },
  ],
  carrito: [],
};

export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let nuevoItem = state.products.find(
        (producto) => producto.id === action.payload
      );
      //console.log(nuevoItem);
      //console.log({carrito: [...state.carrito, nuevoItem]});
      let itemEnCarrito = state.carrito.find(
        (item) => item.id === action.payload
      );

      return itemEnCarrito
        ? {
            ...state,
            carrito: state.carrito.map((item) =>
              item.id === nuevoItem.id
                ? {
                    ...item,
                    cantidad: item.cantidad + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, nuevoItem],
          };
    }
    case TYPES.REMOVE_ITEM: {
    }
    case TYPES.REMOVE_ALL_ITEMS: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
