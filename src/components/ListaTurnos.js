import React, { Component } from 'react';
import Turno from './Turno'

class ListaTurnos extends Component {
    state = {  }

    render() { 

        const turnos = this.props.turnos

        const hayCitas = Object.keys(turnos).length

        return (  
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">  { hayCitas ? ("Administra tus turnos") : "No hay turnos"} </h2>

                    <div className="lista-citas">
                    {
                        Object.keys(turnos).map( key => (
                                <Turno 
                                    key = {key}
                                    turno= {turnos[key]}
                                    eliminar= {this.props.eliminar}
                                /> 
                        )
                        )
                    }

                    </div>

                </div>

              
            </div>
        );
    }
}
 
export default ListaTurnos;