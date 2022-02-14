import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from './Style'
import back from "../../assets/back.png";

export default function TopBar({setIsMenuOpen}) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = useState(false);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (pathname === '/sign-in' || pathname === '/sign-up') {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [pathname]);

    return (
        <Container hidden={isHidden}>
            <h1>BIGHEADSTORE</h1>
            <Button
                isThereMenu={(pathname === '/cart' || pathname === '/checkout') ? false : true}
                onClick={() => {
                    (pathname === '/cart' || pathname === '/checkout') ? goBack() : setIsMenuOpen(true)
                }
                }
            >
                {
                    (pathname === '/cart' || pathname === '/checkout')
                        ?
                        <img src={back} alt="voltar" />
                        :
                        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H22M1 6H22M1 11H22" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>

                }
            </Button>
        </Container>
    )
}
