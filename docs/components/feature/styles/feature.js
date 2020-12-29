import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h2`
    color: white;
    max-width: 640px;
    font-size: 35px;
    font-weight: 500;
    margin: auto;

    @media (min-width: 600px) {
        font-size: 50px;
    }
`;

export const Subtitle = styled.p`
    color: white;
    font-size: 18px;
    font-weight: normal;
    margin: 16px auto;
    
    @media (min-width: 600px) {
        font-size: 26px;
    }
`;