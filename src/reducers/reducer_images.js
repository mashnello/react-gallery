import { GET_IMAGES, EDIT_IMAGE, UPLOAD_IMAGE, DELETE_IMAGE } from '../actions/index';

import { setData } from '../services/data'; // temp

const INITIAL_STATE = { all: {} };

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
                    [action.id]: {
                        name: action.name,
                        tooltip: '',
                        src: action.src
                    },
                    ...state.all
                }); // temp for local data update 
            return {
                ...state,
                all: {
                    [action.id]: {
                        name: action.name,
                        tooltip: '',
                        src: action.src
                    },
                    ...state.all
                }
            };
        case DELETE_IMAGE:
            let copy = Object.assign({}, state.all);
            delete copy[action.id];
            setData(copy); // temp for local data update 
            return {
                ...state,
                all: copy
            };
        default:
            return state;
    }
}