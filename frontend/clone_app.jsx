import React from "react";
import ReactDOM from "react-dom";

import { createSession, deleteSession, postUser} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Yelp Clone :)</h1>, root);

    window.createSession = createSession
    window.deleteSession = deleteSession
    window.postUser = postUser
});

