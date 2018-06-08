import  { getTodos } from './api';

function normalizeArrayToObject(array) {
    let normalized = {}
    array.forEach(item => {
        normalized[item.id] = item;
    });
    return normalized;
}

function shouldFetchTodos(state) {
    if (state.entities.todos.isFetching) {
        return false;
    }
    else {
        return state.entities.todos.didInvalidate;
    }
}

function requestTodosAsync() {
    return dispatch => {
        dispatch(requestTodos());
        getTodos()
            .then(values => dispatch(receiveTodos(normalizeArrayToObject(values.data))))
            .catch(err => console.warn(err));
    };
}

export function fetchTodosIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchTodos(getState())) {
            return dispatch(requestTodosAsync());
        }
        else {
            return Promise.resolve();
        }
    };
}

export const REQUEST_TODOS = 'REQUEST_TODOS';
function requestTodos() {
    return {
        type: REQUEST_TODOS
    };
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
function receiveTodos(items) {
    return {
        type: RECEIVE_TODOS,
        items
    };
}

export function refreshTodos() {
    return (dispatch) => dispatch(requestTodosAsync());
}

export default SELECT_TODO = 'SELECT_TODO';
export function selectTodo(id) {
    return {
        type: SELECT_TODO,
        id
    };
} 