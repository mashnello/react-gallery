import { fetchImages } from '../services/data';
import axios from 'axios';

// const ROOT_URL = './src/services';

export const GET_IMAGES = 'GET_IMAGES';
export const EDIT_IMAGE = 'EDIT_IMAGE';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

export const getImages = () => {
    // const request = axios.get(`${ROOT_URL}/images/data.js`);
    const request = fetchImages();
    return {
        type: GET_IMAGES,
        payload: request
    };
}

export const editImage = (id, name, tooltip) => {
    return {
        type: EDIT_IMAGE,
        id, name, tooltip
    };
}

export const uploadImage = (id, name, src) => {
    return {
        type: UPLOAD_IMAGE,
        id, name, src
    };
}