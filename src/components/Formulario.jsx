import { Button, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Formulario = ({handleChange, handleSubmit , formulario}) => {
  return (
    <div className="d-flex flex-column align-content-center shadow">
      <div className="headerFormulario shadow-sm p-3">
        <p className="fw-bold m-0">Llenar el formulario para crear una cita</p>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="formularioF container-fluid py-3 py-md-4 px-md-5">
          <div className="row mb-2">
            <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
              <label htmlFor="nombreMascota">Nombre de mascota:</label>
            </div>
            <div className="inputForm col-md-8">
              <FormControl
                type="text"
                name="nombreMascota"
                id="nombreMascota"
                placeholder="nombre de mascota"
                required
                minLength={3}
                maxLength={30}
                onChange={handleChange}
                value={formulario.nombreMascota}
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
              <label htmlFor="nombreDueno">Nombre de dueño:</label>
            </div>
            <div className="inputForm col-md-8">
              <FormControl
                type="text"
                name="nombreDueno"
                id="nombreDueno"
                placeholder="nombre de dueño"
                required
                minLength={3}
                maxLength={30}
                onChange={handleChange}
                value={formulario.nombreDueno}
              />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
              <label htmlFor="fecha">Fecha</label>
            </div>
            <div className="inputForm col-md-8">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-md-6">
                    <FormControl
                      className="mb-2 mb-md-0"
                      type="date"
                      name="fecha"
                      id="fecha"
                      required
                      onChange={handleChange}
                      value={formulario.fecha}
                    />
                  </div>

                  <div className="col-md-2 d-flex align-items-center justify-content-lg-end">
                    <label className="mb-2 mb-md-0 col-3" htmlFor="hora">
                      <p className="m-0">Hora:</p>
                    </label>
                  </div>

                  <div className="col-md-4">
                    <FormControl
                      className="col-3"
                      type="time"
                      name="hora"
                      id="hora"
                      required
                      onChange={handleChange}
                      value={formulario.hora}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-4 d-flex align-items-center mb-2 mb-md-0">
              <label htmlFor="sintomas">Sintomas:</label>
            </div>
            <div className="inputForm col-md-8">
              <FormControl
                type="text"
                name="sintomas"
                id="sintomas"
                placeholder="Sintomas"
                required
                minLength={3}
                maxLength={50}
                onChange={handleChange}
                value={formulario.sintomas}
              />
            </div>
          </div>
        </div>

        <div className="footerFormulario text-center py-3 py-md-4 mt-1">
          <Button type="submit" variant="primary">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
    </div>
  );
};
