import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes.js';

import { Home, SignIn, SignUp, Browse } from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute} from './helpers/routes.js';

export default function App() {
    const { user } = useAuthListener();

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <SignIn />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <SignUp />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
            </Switch>
        </Router>
    )
}