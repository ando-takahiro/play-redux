import {REQUEST_ECHO, RECEIVE_ECHO} from '../actions/echo'

export default function echo(state = {message: 'initial message', enabled: true}, action) {
    switch (action.type) {
        case REQUEST_ECHO:
            return {message: '(requesting...)', enabled: false}
        case RECEIVE_ECHO:
            return {message: action.message, enabled: true}
        default:
            return state
    }
}
