import React from "react"
import { Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from "./landing_page/landing_page"
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import BusinessIndexContainer from './business/business_index/business_index_container'

import Footer from './footer/footer'
import NotFoundPage from './notFound'

import { AuthRoute } from '../util/route_util'

const App = () => (
    <div className="tbi-container">
        <div className="tbi-wrapper">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/businesses" component={BusinessIndexContainer} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default App  