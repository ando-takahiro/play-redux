import fetch from 'isomorphic-fetch'

export const REQUEST_ECHO = 'REQUEST_ECHO';
export const RECEIVE_ECHO = 'RECEIVE_ECHO';

function requestEcho() {return {type: REQUEST_ECHO}}
function receiveEcho(message) {return {type: RECEIVE_ECHO, message: message}}

export function echo() {
    return dispatch => {
        dispatch(requestEcho())
        return fetch('/message')
            .then(response => response.json())
            .then(json => dispatch(receiveEcho(json)))
    }
}
