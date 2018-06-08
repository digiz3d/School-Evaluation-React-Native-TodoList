import { combineReducers } from 'redux';
import { LOGIN_ASYNC, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/auth';

function todos(state = { waiting: false, loggedIn: false, name: '' }, action) {
    switch (action.type) {
        case LOGIN_ASYNC:
            return Object.assign({}, state, { loading: true, loggedIn: false });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, { loading: false, loggedIn: true });

        case LOGIN_FAILED:
            return Object.assign({}, state, { loading: false, loggedIn: false });

        default:
            return state;
    }
}

export default combineReducers({
    todos
});