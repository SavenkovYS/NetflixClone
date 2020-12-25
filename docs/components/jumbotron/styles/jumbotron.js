import styled from 'styled-components';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 1000px) {
        flex-direction: ${({ direction }) => direction};
    }
`;

export const Item = styled.div`
    display: flex;
`;

export const Container = styled.section``;

export const Title = styled.h2`
    font-size: 35px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (min-width: 600px) {
        font-size: 50px;
    }
`;

export const Subtitle = styled.p`
    margin: 0;
    font-size: 18px;
    line-height: normal;

    @media (min-width: 600px) {
        font-size: 26px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;