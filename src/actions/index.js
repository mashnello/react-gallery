import { fetchImages } from '../services/data';
import axios from 'axios';

const ROOT_URL = './src/services';

export const GET_IMAGES = 'GET_IMAGES';

export const getImages = () => {
    const request = axios.get(`${ROOT_URL}/images/index.js`);

    return {
        type: GET_IMAGES,
        payload: request
    };
}