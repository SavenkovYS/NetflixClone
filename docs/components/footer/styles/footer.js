import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 30px;
    margin: 0 auto;

    @media (min-width: 1000px) {
        padding: 70px 56px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 15px;

    @media (min-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.h2`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;