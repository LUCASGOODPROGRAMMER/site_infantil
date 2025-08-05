import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import BarNavigation from "./components/BarNavigation";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <BarNavigation />
        <Outlet /> {/* Aqui entra Cards, Quiz, Atividades, Material */}
      </main>
    </>
  );
}

export default App;
