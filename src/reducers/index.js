import { flightReducer } from './flightReducer'
import { combineReducers } from 'redux'

export const initialState = {
    flights: [] 
}

export const rootReducer = combineReducers({
    flightReducer,
})