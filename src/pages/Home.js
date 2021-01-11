import React from 'react';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/Jumbotron.js';
import { FooterContainer } from '../containers/Footer.js';
import { FaqsContainer } from '../containers/Faqs.js';
import { HeaderContainer } from '../containers/Header.js';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create
                        or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}