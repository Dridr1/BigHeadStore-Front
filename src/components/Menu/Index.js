import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContainer, StyledLink, StyledMenu } from './Style';

export default function MenuComponent({ isMenuOpen, setIsMenuOpen }) {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setIsMenuOpen(false);
    navigate('/sign-in');
  }

  return (
    <StyledMenu
      isOpen={isMenuOpen}
      right
      width={'60%'}
      customBurgerIcon={false}
      customCrossIcon={false}
      onClose={() => setIsMenuOpen(false)}
    >
      <h3>Wellcome to BigHeadStore! :D</h3>
      {
        JSON.parse(localStorage.getItem("auth")) === null ?
          <AuthContainer>
            <StyledLink onClick={() => setIsMenuOpen(false)} to='/sign-up'>Sign-up</StyledLink>
            <br />
            <br />
            <StyledLink onClick={() => setIsMenuOpen(false)} to='/sign-in'>Sign-in</StyledLink>
          </AuthContainer>
          :
          ''
      }
      <StyledLink onClick={() => setIsMenuOpen(false)} to='/'>Products</StyledLink>
      {
        JSON.parse(localStorage.getItem('auth')) !== null ? <StyledLink onClick={() => setIsMenuOpen(false)} to='/cart'>Cart</StyledLink> : ''
      }
      {
        JSON.parse(localStorage.getItem('auth')) !== null && <span onClick={() => logout()}>Logout</span>
      }
    </StyledMenu>
  )
}