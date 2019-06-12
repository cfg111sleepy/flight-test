import { SEARCH_FLIGTH }  from '../constants/constants'


export function searchFligth(fligth) {
    return {
        type: SEARCH_FLIGTH,
        payload: fligth
    }
}