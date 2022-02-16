import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 18px;
    font-family: Sancreek;
    font-weight: 100;
    letter-spacing: 1.5px;
    
    h3{
        font-size: 1.25em;
        text-align: center;
        font-family: Sancreek;
        font-weight: 100;
        letter-spacing: 1.5px;
        
    }
    span{
        color: #EB4629;
        font-size: 1.1em;
        margin-top:16px;      
        font-family: Sancreek;
        font-weight: 100;
        letter-spacing: 1.5px;
    }
`;

export const StyledLink = styled(Link)`
    margin-top: 16px;
    font-size: 1.1em;
    font-family: Sancreek;
    font-weight: 100;
    letter-spacing: 1.5px;
`;

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 45px;    
`;