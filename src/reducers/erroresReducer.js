import { VALIDAR_FORMULARIO, MOSTRAR_ERROR} from '../actions/types'

//cada reducer tiene su state

const initialState = {
    error:false
}

export default function( state = initialState, actions) {
    switch(actions.type) {
        case VALIDAR_FORMULARIO:
                return {
                    error: action.payload
                }
        default:
            return state
    }
}