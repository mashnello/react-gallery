import { fetchImages } from '../services/data';

export const GET_IMAGES = 'GET_IMAGES';

export const getImages = () => {
    const request = fetchImages();
    return {
        type: GET_IMAGES,
        payload: request
    };
}