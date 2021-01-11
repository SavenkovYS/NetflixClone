import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 50px;
    background: #e50914;
    color: #fff;
    text-transform: uppercase;
    margin-top: 20px;
    padding: 0 32px;
    font-size: 16px;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 16px;
        
        @media (min-width: 1000px) {
            width: 24px;
        }
    }

    &:hover {
        background: #f40612;
    }
    
    @media (min-width: 1000px) {
        height: 70px;
        font-size: 26px;
        margin-top: 0;
        font-weight: normal;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    
    @media (min-width: 600px) {
        font-size: 19px;
        line-height: normal;
    }
`;