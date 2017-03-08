import { GET_IMAGES } from '../actions/index';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_IMAGES:
            return Object.assign(
                ...state,
                action.payload
            );
        default:
            return state;
    }
}