import { MOSTRAR_TURNOS, AGREGAR_TURNO, BORRAR_TURNO} from './types'

export const getTurnos = () => {
    return {
        type: MOSTRAR_TURNOS
    }
}

export const addTurno = (turno) => {
    return {
        type: AGREGAR_TURNO,
        payload: turno
    }
}

export const deleteTurno = (id) => {
    return {
        type: BORRAR_TURNO,
        payload: id
    }
}