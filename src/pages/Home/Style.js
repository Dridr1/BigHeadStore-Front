import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 58px 12px;
    gap: 22px;
`;

export const Title = styled.h2`
    margin-top: 70px;
    font-weight: bold;
    font-size: 20px;
    font-family: Sancreek;
    font-weight: 100;
    letter-spacing: 1.5px;
`;

export const Products = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 18px;
    
`;

export const MarketCartContainer = styled.div`
    width: 100vw;
    background-color: #e5e5e5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    padding-right: 30px;
    position: fixed;
    z-index: 10;

    img{
        width: 25px;
        height: 20px;    
        margin-right: 10px;
            :hover {
                cursor: pointer;
            }
    }
    span{  
        width: 10px;
        font-size: 20px;
        cursor: pointer;
    }
`;