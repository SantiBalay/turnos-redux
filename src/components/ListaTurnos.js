import React, { Component } from 'react';
import Turno from './Turno'

//redux
import { connect } from 'react-redux'
import { getTurnos } from '../actions/turnosActions'

import store from '../store'

store.subscribe( () => {
    console.log("Me ejecute")
    localStorage.setItem('turnos', JSON.stringify(store.getState()))
})

class ListaTurnos extends Component {

    componentDidMount() {
        this.props.getTurnos();
    }

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

const mapStateToProps = state => ( {
    turnos: state.turnos.turnos
})
 
export default connect(mapStateToProps, {getTurnos}) (ListaTurnos);