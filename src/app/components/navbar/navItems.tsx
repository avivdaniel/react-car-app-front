import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../responsive";

const ListContainer = styled.ul`
  ${tw`
    flex
    space-x-1
    md:space-x-5
  `}
`;

const NavItem = styled.li`
  ${tw`
    text-xs
    md:text-base
    font-medium
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const links = (
    <>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </>
  );

  const navItems = isMobile ? <Menu>{links}</Menu> : links;

  return <ListContainer>{navItems}</ListContainer>;
};

export default NavItems;
