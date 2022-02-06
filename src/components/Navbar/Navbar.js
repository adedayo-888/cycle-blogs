import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import image from '../../images/cryptobcg.jpg';
import { Nav, Logo, Hamburger, Menu, MenuLink } from './NavStyles';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href=''>Cycling-Blogs</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FaBars style={{ fontSize: '2rem', color: 'white' }} />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href=''>Latest Cycling News</MenuLink>
        <MenuLink href=''>Cycling Tips</MenuLink>
        <MenuLink href=''>Create a post</MenuLink>
        <MenuLink href=''>Sign In</MenuLink>
        <MenuLink href=''>Log Out</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
