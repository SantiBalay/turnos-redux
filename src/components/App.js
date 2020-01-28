import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import ListaTurnos from './ListaTurnos'

//redux 
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {

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

  eliminar = (idTurno) => {
       const turnosActuales =[...this.state.turnos] 

       const turnos = turnosActuales.filter( turno => ( turno.id !== idTurno) )

       this.setState({
         turnos
       })
  }

  render() { 
    return (   
      <Provider store={store}>
        <div className="container">
          <Header
            titulo={"Administrador de turnos"}
          />
          
          <div className="row">
              <div className="col-md-6">
                <Formulario
                />
              </div>

              <div className="col-md-6">
                  <ListaTurnos
                  />
              </div>
          </div>
        </div>
      </Provider>
    );
  }
}
 
export default App;