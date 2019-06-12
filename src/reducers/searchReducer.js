import { SEARCH_FLIGTH }  from '../constants/constants'

const initialState = {
    search: null
}

export const searchReducer = (state = initialState, action) => {

    switch(action.type){
        case SEARCH_FLIGTH:
            return { ...state, search: action.payload }

        default:
            return state
      }
}