import { GET_IMAGES, EDIT_IMAGE } from '../actions/index';

const INITIAL_STATE = { all: {}, image: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_IMAGES:
            return { ...state, all: action.payload.data };
        case EDIT_IMAGE:
            return {
                ...state,
                all: {
                    ...state.all,
                    [action.id]: {
                        ...state.all[action.id],
                        name: action.name,
                        tooltip: action.tooltip
                    }
                }
            };
        default:
            return state;
    }
}