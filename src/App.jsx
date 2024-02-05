import "./App.css";
import { Card } from "./components/Card";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <section className="container">
      <h2 className="text-center mb-4">
        Administrador pacientes de veterinaria
      </h2>
      <div className="mb-5">
        <Formulario/>
      </div>

      <div className="text-center">
        <h4>Administra las citas aqui</h4>
      </div>
    </section>
  );
}

export default App;
