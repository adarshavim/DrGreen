import * as ActionTypes from './ActionTypes';   

export const Diseases = (state = {
    isLoading: true,
    errMess: null,
    diseases: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISEASE:
            return { ...state, isLoading: false, errMess: null, diseases: action.payload};

        case ActionTypes.DISEASE_LOADING:
            return { ...state, isLoading: true, errMess: null, diseases: [] };

        case ActionTypes.DISEASE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
}