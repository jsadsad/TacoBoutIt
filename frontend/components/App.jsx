import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from './greetings/greeting_container';
// import LoginFormContainer from './login_form_container'
// import SignupFormContainer from './signup_form_container'

const App = () => (
    <div>
        <header>
            <h1>Welcome to Yelp Clone</h1>
            <GreetingContainer />
        </header>

    </div>
);

export default App