import { fetchImages } from '../services/data';
import axios from 'axios';

export const GET_IMAGES = 'GET_IMAGES';
export const EDIT_IMAGE = 'EDIT_IMAGE';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export const getImages = () => {
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

export const deleteImage = (id) => {
    return {
        type: DELETE_IMAGE,
        id
    };
}