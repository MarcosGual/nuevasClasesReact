import "./App.css";
import NavBar from "./components/NavBar";
import Pie from "./components/Pie";
import Cuerpo from "./components/Cuerpo";
import BookContextProvider from "./providers/bookContextProvider";
import TemaContextoProvider from "./providers/TemaContextoProvider";

function App() {
  return (
    //JSX
    <>
      <div className="pagina">
        <TemaContextoProvider>
          <NavBar />
          <Cuerpo />
          <Pie />
        </TemaContextoProvider>
      </div>
    </>
  );
}

export default App;
