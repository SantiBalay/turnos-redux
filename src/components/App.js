import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import ListaTurnos from './ListaTurnos'

class App extends Component {
  
  
  state = {  
    turnos : []
  }

  componentDidUpdate() {
    localStorage.setItem(
      'turnos',
      JSON.stringify(this.state.turnos)
    )
  }

  componentDidMount() {
   
    const turnosSt = localStorage.getItem('turnos')

    if(turnosSt) {
        this.setState({
        turnos: JSON.parse(turnosSt)
      })
    }


  }


  crearTurno = (nuevoTurno) => {
    const turnos = [...this.state.turnos, nuevoTurno]

    this.setState ({
      turnos
    })

  }

  eliminar = (idTurno) => {
       const turnosActuales =[...this.state.turnos] 

       const turnos = turnosActuales.filter( turno => ( turno.id !== idTurno) )

       this.setState({
         turnos
       })
  }

  render() { 
    return (   
      <div className="container">
        <Header
          titulo={"Administrador de turnos"}
        />
        
        <div className="row">
            <div className="col-md-6">
               <Formulario
                  crearTurno={this.crearTurno}
               />
            </div>

            <div className="col-md-6">
                <ListaTurnos
                  turnos= {this.state.turnos}
                  eliminar = {this.eliminar}
                />
            </div>
        </div>

        
        
      </div>
    );
  }
}
 
export default App;