import React from 'react';
import { JumbotronContainer } from '../containers/Jumbotron.js';
import { FooterContainer } from '../containers/Footer.js';
import { FaqsContainer } from '../containers/Faqs.js'
 
export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}