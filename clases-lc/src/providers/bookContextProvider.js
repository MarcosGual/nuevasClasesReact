import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Código Da Vinci", author: "Dan Brown" },
    { id: 2, title: "Harry Potter", author: "J. K. Rowling" },
    { id: 3, title: "El Principito", author: "Antoine de Saint-Exupéry" },
  ]);

  return (
    <BookContext.Provider value={books}>
        {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
