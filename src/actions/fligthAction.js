import { FETCH_FLIGHT_SUCCESS,
         FETCH_FLIGHT_FAILURE }   from '../constants/constants'

export const getFlight = () => {
return dispatch => {
   fetch('https://api.iev.aero/api/flights/06-04-2019')
       .then(response => response.json())
       .then(json => dispatch({
           type: FETCH_FLIGHT_SUCCESS,
           payload: json
       }))
       .catch(()=> dispatch({
           type: FETCH_FLIGHT_FAILURE,
           payload: null
       }))
    }
}