import axios from 'axios';
import querystring from 'querystring';

const baseURL = 'http://formation-roomy.inow.fr/';

const api = axios.create({ baseURL });

export function _setToken(token) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export function getTodos() {
    return api.get('api/todoItems');
}

export function authenticate(email, password) {
    return api.post('token', querystring.stringify({
        grant_type: 'password',
        username: email,
        password: password
    }));
}

export function setTodoDone(todo) {
    return api.put('api/todoItems/' + todo.id, todo);
}