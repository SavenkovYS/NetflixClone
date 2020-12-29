import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes.js'

import { Home, SignIn, SignUp, Browse } from './pages'

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route path={ROUTES.SIGN_IN}>
                    <SignIn />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <SignUp />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <Browse />
                </Route>
            </Switch>
        </Router>
    )
}
