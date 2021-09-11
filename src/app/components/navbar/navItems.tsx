import React from "react";
import styled, { css } from "styled-components/macro";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    space-x-1
    md:space-x-5
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md:text-base
    font-medium
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-red-500
  `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`text-white focus:text-white text-xl mb-4`}
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const links = (
    <>
      <NavItem menu={isMobile}>
        <a href="#">Home</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Services</a>
      </NavItem>
      <NavItem menu={isMobile}>
        <a href="#">Contact Us</a>
      </NavItem>
    </>
  );

  const navItems = isMobile ? (
    <Menu right styles={menuStyles}>
      {links}
    </Menu>
  ) : (
    links
  );

  return <ListContainer>{navItems}</ListContainer>;
};

export default NavItems;
