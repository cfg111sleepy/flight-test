import { flightReducer }    from './flightReducer'
import { combineReducers }  from 'redux'

export const initialState = {
    flights: {
        body:{
            arrival: [],
            departure: []
        }
    }
}

export const rootReducer = combineReducers({
    flightReducer,
})