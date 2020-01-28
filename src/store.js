import {createStore,applyMiddleware,compose} from 'redux'

import thunk from 'redux-thunk'

import reducerPrincial from './reducers'

const initialState = {}

const middleware = [thunk];

// agrego local storage

const storageState = localStorage.getItem('turnos') ? JSON.parse(localStorage.getItem('turnos')) : []

const store = createStore(reducerPrincial,storageState,compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

export default store;