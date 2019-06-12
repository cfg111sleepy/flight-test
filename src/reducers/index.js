import { flightReducer }    from './flightReducer'
import { combineReducers }  from 'redux'
import { searchReducer }    from './searchReducer'

export const initialState = {
    flights: {
        body:{
            arrival: [],
            departure: []
        }
    },
}

export const rootReducer = combineReducers({
    flightReducer,
    searchReducer
})