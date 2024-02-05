import { Button } from "react-bootstrap"

export const Card = () => {
  return (
    <div className="cardCita shadow">
        <div className="headerCardCita p-3">
            <h5>Mascota: Firulais</h5>
            <p className="m-0">Dueño: Pepe</p>
        </div>

        <section className="cardCitaBody">
            <div className="container-fluid p-0 colorCard p-3">
                <div className="row w-100 mb-2">
                    <div className="col-4">Fecha</div>
                    <div className="bg-light col-8">dd/mm/yyyy</div>
                </div>

                <div className="row w-100 mb-2">
                    <div className="col-4">Hora</div>
                    <div className="bg-light col-8">hh:mm</div>
                </div>
                <div className="row w-100">
                    <div className="col-4">Sintomas</div>
                    <div className="bg-light col-8">describir</div>
                </div>
            </div>

            <div className="p-3 text-end">
                <Button variant="danger">Borrar</Button>
            </div>
        </section>
    </div>
  )
}
