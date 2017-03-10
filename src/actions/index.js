import { fetchImages } from '../services/data';
import axios from 'axios';

const ROOT_URL = './src/services';

export const GET_IMAGES = 'GET_IMAGES';

export const getImages = () => {
    return function(dispatch) {
        return axios({
            url: `${ROOT_URL}/images/index.js`,
            timeout: 1000,
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            dispatch({
                type: GET_IMAGES,
                payload: response.data
            });
        })
    }
}