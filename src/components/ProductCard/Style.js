import styled from "styled-components";

export const Container = styled.div`
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
    h3{
        font-size: 1em;
    }
    img{
        width: 98px;
        height: 98px;
        object-fit: cover;
        border-radius: 12px;
    }
`;

export const PriceTag = styled.div`
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