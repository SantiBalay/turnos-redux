import { combineReducers } from 'redux'

import turnosReducer from './reducerTurnos'

export default combineReducers({
    turnos: turnosReducer
})