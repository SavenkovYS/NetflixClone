import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-size: 35px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 50px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 16px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
        
        @media (min-width: 600px) {
            width: 24px;
        }
    }

    @media (min-width: 600px) {
        font-size: 26px;
    }
`;

export const Body = styled.div`
    max-width: 1200px;
    box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    
    @media (min-width: 600px) {
        font-size: 26px;
        line-height: normal;
    }
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;