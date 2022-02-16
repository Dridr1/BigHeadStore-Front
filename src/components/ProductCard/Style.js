import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 143px;
    height: 225px;
    gap: 18px;
    border-radius: 15px;
    align-items: center;
    background: #e5e5e5;
    padding: 10px;
    text-align: center;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 600ms;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    position:relative;
    z-index: 0;

    h3{
        font-size: 1em;
    }
    img{
        width: 98px;
        height: 98px;
        object-fit: cover;
        border-radius: 12px;
    }
    
    :hover {
        transition-duration: 600ms;
        transform: scale(1.05); 
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
        position: relative;
        z-index: 0;
    }
`;

export const PriceTag = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    span{
        color: black;
        font-size: 0.85em;
    }
    p{
        color: green;
        font-size: 0.85em;
    }
`;