
import { FETCH_FLIGHT_SUCCESS,
         FETCH_FLIGHT_REQUEST,
         FETCH_FLIGHT_FAILURE }     from '../constants/constants'
import { initialState }             from './index'

export const flightReducer = (state = initialState, action) => {

switch(action.type){
   case FETCH_FLIGHT_FAILURE:
       return console.error('error article')

   case FETCH_FLIGHT_SUCCESS:
       return { ...state, flights: action.payload }

   case FETCH_FLIGHT_REQUEST:
       return console.log('Loading...')

   default:
       return state
}
}