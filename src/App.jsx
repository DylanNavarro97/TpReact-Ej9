import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Formulario } from "./components/Formulario";

function App() {
  const [formulario, setFormulario] = useState({
    nombreMascota: "",
    nombreDueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [citas, setCitas] = useState([]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificarFormulario()) {
      if (verificarUnicoTurno()) {
        const citasArray = [...citas, formulario]
        setCitas(citasArray);
        localStorage.setItem("citas", JSON.stringify(citasArray))
        alert("Cita creada con exito")
      } else {
        alert("Esta veterinaria solo permite un turno por dueño")
      }
    } else {
      alert("Completa los datos")
    }
  };

  const handleErase = (citaProp) => {
    const citasFiltradas = citas.filter((cita) => cita.nombreDueno !== citaProp.nombreDueno)
    setCitas(citasFiltradas)
    localStorage.setItem("citas", JSON.stringify(citasFiltradas))
  }

  const verificarFormulario = () => {
    if (
      verificarInputText(formulario.nombreDueno, 3, 30) &&
      verificarInputText(formulario.nombreMascota, 3, 30) &&
      verificarInputText(formulario.sintomas, 3, 50) &&
      formulario.fecha !== "" &&
      formulario.hora !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verificarUnicoTurno = () => {
    const filtroDueno = citas.filter(
      (cita) => cita.nombreDueno === formulario.nombreDueno
    );

    if (filtroDueno.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const verificarInputText = (input, minlength, maxlength) => {
    if (input.trim().length >= minlength && input.trim().length <= maxlength) {
      return true;
    } else {
      return false;
    }
  };


  useEffect(() => {
    const citasLS = JSON.parse(localStorage.getItem("citas")) || []
      setCitas(citasLS)
  },[])

  return (
    <section className="container">
      <h2 className="text-center mb-4">
        Administrador pacientes de veterinaria
      </h2>
      <div className="mb-5">
        <Formulario
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formulario={formulario}
        />
      </div>

      <div className="text-center">
        <h4>Administra las citas aqui</h4>

        <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
            {citas?.map((cita, i) => (
              <Card cita={cita} key={i} handleErase={handleErase}/>
            ))}
        </div>
      </div>
    </section>
  );
}

export default App;
