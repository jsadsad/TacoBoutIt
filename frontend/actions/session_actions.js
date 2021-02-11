import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = `RECEIVE_CURRENT_USER`
export const LOGOUT_CURRENT_USER = `LOGOUT_CURRENT_USER`
export const RECEIVE_ERRORS = `RECEIVE_ERRORS`
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const login = (user) => dispatch => {
    return SessionApiUtil.createSession(user)
        .then(createdUser => dispatch(receiveCurrentUser(createdUser)),
            error => dispatch(receiveErrors(error.responseJSON)))
}

export const signUp = (user) => dispatch => {
    return SessionApiUtil.postUser(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON)))
}

export const logout = () => dispatch => {
    return SessionApiUtil.deleteSession()
        .then(user => dispatch(logoutCurrentUser(user)))
}


