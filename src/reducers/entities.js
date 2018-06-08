import { combineReducers } from 'redux';
import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/entities';

function todos(state = { didInvalidate: true, isFetching: false, items: {}, selected: '' }, action) {
    switch (action.type) {
        case REQUEST_TODOS:
            return Object.assign({}, state, { didInvalidate: false, isFetching: true });

        case RECEIVE_TODOS:
            return Object.assign({}, state, { didInvalidate: false, isFetching: false, items: action.items });

        case SELECT_TODO:
            return Object.assign({}, state, { selected: action.id });

        default:
            return state;
    }
}

export default combineReducers({
    todos
});