import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header.js'
import { FooterContainer } from '../containers/Footer.js'
import * as ROUTES from '../constants/routes.js'
import { FirebaseContext } from '../context/firebase';

export default function SingIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isinvalid = emailAddress === '' | password === ''

    const handleSignIn = (event) => {
        event.preventDefault();

        firebase    
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {           
                history.push(ROUTES.BROWSE);
            })
            .catch(error => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} 
                        />
                        <Form.Input 
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} 
                        />
                        <Form.Submit disabled={isinvalid} type="submit">
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign Up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}