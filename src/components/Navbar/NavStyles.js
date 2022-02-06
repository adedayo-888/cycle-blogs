import styled from 'styled-components';

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #024a17;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.h1`
  padding: 1rem 0;
  color: #1ae857;
  text-decoration: none;
  font-weight: bold;
  font-family: Lobster, cursive;
  font-size: 1.7rem;
  letter-spacing: 0.29rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  &:hover {
    color: #1ae857;
    transform: translateX(-5px);
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
