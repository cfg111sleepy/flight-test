import { FETCH_FLIGHT_SUCCESS,
         FETCH_FLIGHT_FAILURE }   from '../constants/constants'

export const getFlight = () => {
return dispatch => {
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const newdate = `${day}-${month}-${year}`
    
    fetch(`https://api.iev.aero/api/flights/${newdate}`)
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