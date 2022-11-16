import React, { useContext } from "react";
import { BookContext } from "../providers/bookContextProvider";

const Lista = () => {

  return (
    <ul>
      <li key={1}>Item1</li>
      <li key={2}>Item2</li>
      <li key={3}>Item3</li>
      <li key={4}>Item4</li>
    </ul>
  );
};

export default Lista;
