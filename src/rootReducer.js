import { ADD_BOOCH, REMOVE_BOOCH, GET_BOOCHS } from "./actionCreators"

const initialState = {
    boochs: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_BOOCHS:
            return {...state, boochs: action.data}
        case ADD_BOOCH:
            return{
                ...state,
                boochs: [...state.boochs,action.booch]
            } ;
        case REMOVE_BOOCH:
            let boochs = state.boochs.filter(val => val._id !== action.id)
            return {...state, boochs};
        
        default:
            return state     
    }
        
}

