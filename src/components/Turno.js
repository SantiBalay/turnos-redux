import React, { Component } from 'react';

class Turno extends Component {

    eliminarTurno = () => {

        this.props.eliminar(this.props.turno.id)
    }

    render() {

        const {mascota,duenio,fecha,hora,sintomas} = this.props.turno
        return (  
            <div className="media mt-3">
                <div className="media-body">
                    <h4 className="mt-0"> Nombre Mascota: {mascota} </h4>
                    <p className="card-text"> <span> Nombre del Dueño: {duenio} </span> </p>
                    <p className="card-text"> <span> Fecha: {fecha} </span> </p>
                    <p className="card-text"> <span> Hora: {hora} </span> </p>
                    <p className="card-text"> <span> Sintomas: {sintomas} </span> </p>
                    <p className="card-text"> </p>

                    <button className="btn btn-danger" onClick={this.eliminarTurno}>
                        Borrar
                    </button>

                </div>
            </div>
        );
    }
}
 
export default Turno;