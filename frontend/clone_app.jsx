import React from 'react'
import ReactDOM from "react-dom"
import configureStore from "./store/store"
import Root from "./components/root"

import { login } from './actions/session_actions'
import { createSession, deleteSession, postUser} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {}
    const store = configureStore(preloadedState)
    const root = document.getElementById("root")
    
    ReactDOM.render(<Root store={store} />, root)

    // window.createSession = createSession
    // window.deleteSession = deleteSession
    // window.postUser = postUser

    //TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
})

