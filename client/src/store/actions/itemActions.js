import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnError } from './errorActions';

export const getItem = () => dispatch => {
    dispatch(setLoadingItem())
    axios.get('/api/items')
        .then(res => 
            dispatch({
                type: 'GET_ITEM',
                payload: res.data
            })
        )
        .catch(err => dispatch(returnError(err.response.data, err.response.status)))
}

export const addItem = item => (dispatch, getState) => {
    axios.post('/api/items', item, tokenConfig(getState)).then(res => {
            dispatch({
                type: 'ADD_ITEM',
                payload: res.data
            })
        }
    );
}

export const deleteItem = id => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`, tokenConfig(getState)).then(res => {
            dispatch({
                type: 'DELETE_ITEM',
                payload: id
            })
        }
    );
}

export const setLoadingItem = () => {
    return {
        type: 'LOADING_ITEM'
    }
}