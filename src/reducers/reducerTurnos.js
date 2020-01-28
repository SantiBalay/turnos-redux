import {MOSTRAR_TURNOS,BORRAR_TURNO,AGREGAR_TURNO} from '../actions/types'

// todo reducer tiene su propio state

const initialState = {
    turnos : [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MOSTRAR_TURNOS: 
            return {
                ...state
            }
        case AGREGAR_TURNO: 
            return {
                ...state,
                turnos : [...state.turnos, action.payload]
            }
        case BORRAR_TURNO: 
            return {
                ...state,
                turnos : state.turnos.filter( turno => ( turno.id !== action.payload) )
            }
        default: 
            return state
    }
}