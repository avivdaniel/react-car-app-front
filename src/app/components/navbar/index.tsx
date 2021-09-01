import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    items-center
    justify-between
    px-3
    lg:px-12 
  `}
`;

const LogoContainer = styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
