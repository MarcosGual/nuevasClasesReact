import "./App.css";
import {curiosidades, caracteristicas} from './data'

function App() {
  const bienvenida = "Bienvenidos a React!";

  
  return (
    //JSX
    <div className="App">
      <header className="App-header">
        <h1>{bienvenida}</h1>
        <h2>Curiosidades</h2>
        <ul>
          {curiosidades.map((curiosidad) => {
            return <li key={curiosidad.id}>{curiosidad.descripcion}</li>;
          })}
        </ul>
        <h2>Características</h2>
        <ul>
          {caracteristicas.map((caracteristica) => {
            return (
              <li key={caracteristica.id}>{caracteristica.descripcion}</li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
