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

export const Pane = styled.div`
    width: 100%;
    padding: 0 45px;
    text-align: center;

    @media (min-width: 1000px) {
        width: 50%;
        padding: 0;
        text-align: left;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: #fff;
    overflow: hidden;
`;

export const Container = styled.section`
    background-color: #000;
    ${Item}:last-of-type p {
        margin-bottom: 50px;
    }

    @media (min-width: 1000px) {
        ${Item}:last-of-type p {
            margin-bottom: 0;
        }
    }
`;

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