import React from 'react';
import { Container, Title, Subtitle } from './styles/feature.js'

export default function Feature({ children, ...restPorps }) {
    return <Container {...restPorps}>{children}</Container>
}

Feature.Title = function FetureTitle({ children, ...restPorps }) {
    return <Title {...restPorps}>{children}</Title>
}

Feature.Subtitle = function FetureSubtitle({ children, ...restPorps }) {
    return <Subtitle {...restPorps}>{children}</Subtitle>
}