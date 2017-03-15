import { GET_IMAGES, EDIT_IMAGE, UPLOAD_IMAGE, DELETE_IMAGE } from '../actions/index';

import { setData } from '../services/data';

const INITIAL_STATE = { all: {} };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                all: action.payload
            };
        case EDIT_IMAGE:
            setData({...state.all,
                    [action.id]: {
                        ...state.all[action.id],
                        name: action.name,
                        tooltip: action.tooltip
                    }
                });
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
                });
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
            setData(copy);
            return {
                ...state,
                all: copy
            };
        default:
            return state;
    }
}