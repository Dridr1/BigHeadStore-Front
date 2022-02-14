import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 18px;
    
    
    h3{
        font-size: 1.25em;
        text-align: center;
        
    }
    span{
        color: #EB4629;
        font-size: 1.1em;
        margin-top:16px;      
    }
`;

export const StyledLink = styled(Link)`
    margin-top: 16px;
    font-size: 1.1em;
`;

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 45px;    
`;