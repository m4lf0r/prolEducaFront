import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }
`;


export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #1565c0;
  }
`;

export const LogoutButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #b52a37;
  }
`;
