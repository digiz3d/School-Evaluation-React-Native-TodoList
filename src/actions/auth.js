import { authenticate, _setToken } from './api';
import auth from '../reducers/auth';

export const LOGIN_ASYNC = 'LOGIN_ASYNC';
function logIn() {
    return {
        type: LOGIN_ASYNC
    };
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
function loginSucess() {
    return {
        type: LOGIN_SUCCESS
    };
};

export const LOGIN_FAILED = 'LOGIN_FAILED';
function loginFailed() {
    return {
        type: LOGIN_FAILED
    };
};

export function loginAsync(login, password, onSuccess) {
    return (dispatch) => {
        dispatch(logIn());
        authenticate(login, password)
            .then(values => {
                _setToken(values.data.token);
                dispatch(loginSucess());
                return onSuccess();
            })
            .catch(err => {
                console.warn(err);
                dispatch(loginFailed())
            });
    };
}