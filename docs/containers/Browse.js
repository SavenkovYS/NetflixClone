import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes.js';
import { FirebaseContext } from '../context/firebase.js';
import { SelectProfileContainer } from './profiles.js';
import { FooterContainer } from './footer';

export function BrowseContainer() {
    const [profile, setProfile] = useState({});

    const user = {
        displayName: "Karl",
        photoURL: "1"
    };

    return profile.displayName ? (
        <>
            <FooterContainer />
        </>) : 
        (<SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}