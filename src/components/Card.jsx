import { Button } from "react-bootstrap"

export const Card = ({cita, handleErase}) => {
  return (
    <div className="cardCita shadow">
        <div className="headerCardCita p-3">
            <h5>Mascota: {cita.nombreMascota}</h5>
            <p className="m-0">Dueño: {cita.nombreDueno}</p>
        </div>

        <section className="cardCitaBody">
            <div className="container-fluid p-0 colorCard p-3">
                <div className="row w-100 mb-2">
                    <div className="col-4">Fecha</div>
                    <div className="bg-light col-8">{cita.fecha}</div>
                </div>

                <div className="row w-100 mb-2">
                    <div className="col-4">Hora</div>
                    <div className="bg-light col-8">{cita.hora}</div>
                </div>
                <div className="row w-100">
                    <div className="col-4">Sintomas</div>
                    <div className="bg-light col-8">{cita.sintomas}</div>
                </div>
            </div>

            <div className="p-3 text-end">
                <Button variant="danger" onClick={() => handleErase(cita)}>Borrar</Button>
            </div>
        </section>
    </div>
  )
}
