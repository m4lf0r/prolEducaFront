import React from 'react';
import { Nav, NavContainer, Logo, NavLinks, NavItem, LogoutButton } from './styled';
import LogoImage from '../../assets/logo_prol.webp';

interface NavbarProps {
  isLogged?: boolean;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLogged = false, onLogout }) => {
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <img src={LogoImage} alt="Prol Educa" />
        </Logo>
        <NavLinks>

          <NavItem href="/admin/schools">Portal</NavItem>
          {isLogged ? (
            <LogoutButton onClick={onLogout}>Sair</LogoutButton>
          ) : (
            <NavItem href="/admin/register">Register</NavItem>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
