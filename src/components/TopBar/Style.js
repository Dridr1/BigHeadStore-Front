import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.hidden ? 'hidden' : 'flex'};
    justify-content: center;
    align-items: center;
    background: #EB4629;
    height: 59px;
    width: 100%;
    position: fixed;
    h1{
        font-family: Sancreek;
        font-size: 24px;
        line-height: 33px;
        color: white;
    }
`;

export const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EB4629;
    width: 46px;
    height: 36px;
    border-radius: 15px;
    cursor: pointer;
    ${props => props.isThereMenu ? 'right' : 'left'}: 15px; 
`;