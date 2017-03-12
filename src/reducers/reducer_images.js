import { GET_IMAGES, EDIT_IMAGE, UPLOAD_IMAGE } from '../actions/index';

import { setData } from '../services/data'; // temp
const INITIAL_STATE = { all: {}, image: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                // all: action.payload.data
                all: action.payload
            };
        case EDIT_IMAGE:
            setData({...state.all,
                    [action.id]: {
                        ...state.all[action.id],
                        name: action.name,
                        tooltip: action.tooltip
                    }
                }); // temp for local data update 
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
        case UPLOAD_IMAGE:
            setData({
                    ...state.all,
                    [action.id]: {
                        name: action.name,
                        tooltip: '',
                        src: action.src
                    }
                }); // temp for local data update 
            return {
                ...state,
                all: {
                    ...state.all,
                    [action.id]: {
                        name: action.name,
                        tooltip: '',
                        src: action.src
                    }
                }
            };
        default:
            return state;
    }
}