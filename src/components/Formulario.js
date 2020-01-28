import React, { Component } from 'react';
import uuid from 'uuid';

//redux
import { connect } from 'react-redux'
import {addTurno} from '../actions/turnosActions'

class Formulario extends Component {
   
   
    state = { 
        error: false
    }

    mascotaRef = React.createRef()
    duenioRef = React.createRef()
    fechaRef = React.createRef()
    horaRef = React.createRef()
    sintomasRef = React.createRef()

    validarTurno(nuevoTurno) {
        if( nuevoTurno.mascota === ''
        || nuevoTurno.duenio === '' 
        || nuevoTurno.fecha === '' 
        || nuevoTurno.hora === '' 
        || nuevoTurno.sintomas === '' 
        ) {
            this.setState({
                error:true
            })

            return false
        }

        return true
    }


    enviarFormulario = (e) => {
        e.preventDefault()

        const nuevoTurno = {
            id: uuid(),
            mascota : this.mascotaRef.current.value,
            duenio : this.duenioRef.current.value,
            fecha : this.fechaRef.current.value,
            hora : this.horaRef.current.value,
            sintomas : this.sintomasRef.current.value
        }

        if(this.validarTurno(nuevoTurno)) {
            //e.currentTarget.reset()
            this.props.addTurno(nuevoTurno)

        }
    }

    render() { 

        const existeError = this.state.error


        return (  
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5"> Agregar Turno</h2>

                    <form onSubmit={this.enviarFormulario}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.mascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.duenioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>

                    { existeError ? <div className='alert alert-danger text-center'>
                                        Todos los campos son obligatorios
                                    </div>
                     : ''
                     }
                                

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    turnos: state.turnos.turnos
})
 
export default connect(mapStateToProps,{addTurno}) (Formulario);