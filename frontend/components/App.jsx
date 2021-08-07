import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './landing_page/landing_page'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import BusinessIndexContainer from './business/business_index/BusinessIndexContainer'
import AmericanBizIndexContainer from './business/businesss_categories/AmericanBusinessContainer'
import ItalianBizIndexContainer from './business/businesss_categories/ItalianBusinessContainer'
import ThaiBizIndexContainer from './business/businesss_categories/ThaiBusinessContainer'
import JapaneseBizIndexContainer from './business/businesss_categories/JapaneseBusinessContainer'
import ChineseBizIndexContainer from './business/businesss_categories/ChineseBusinessContainer'
import KoreanBizIndexContainer from './business/businesss_categories/KoreanBusinessContainer'
import CofTeaBizIndexContainer from './business/businesss_categories/CoffeeTeaBusinessContainer'
import BusinessShowContainer from './business/business_show/BusinessShowContainer'
import CreateReviewContainer from './review/review_form/create_review_form_container'
import EditReviewContainer from './review/review_form/edit_review_form_container'
import NotFoundPage from './notFound'

import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div className="tbi-container">
    <div className="tbi-wrapper">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route
          path="/businesses/search/:find_desc?"
          component={BusinessIndexContainer}
        />
        <Route
          exact
          path="/businesses/american"
          component={AmericanBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/italian"
          component={ItalianBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/thai"
          component={ThaiBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/japanese"
          component={JapaneseBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/chinese"
          component={ChineseBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/korean"
          component={KoreanBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/tea"
          component={CofTeaBizIndexContainer}
        />
        <Route
          exact
          path="/businesses/:businessId"
          component={BusinessShowContainer}
        />
        <ProtectedRoute
          exact
          path="/businesses/:businessId/reviews/new"
          component={CreateReviewContainer}
        />
        <ProtectedRoute
          exact
          path="/businesses/:businessId/reviews/:reviewId/edit"
          component={EditReviewContainer}
        />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  </div>
)

export default App
