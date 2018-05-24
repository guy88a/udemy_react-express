import axios from 'axios';
import {FETCH_USER} from './types';

const fetchUser = () => {
    return async function (dispatch) {
        const user = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: user});
    }
}