import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.nav`
  min-height: 30em;
  background: #1d2124;
  ${tw`
    min-w-full
    px-7
    pt-12
    pb-1
  `}
`;

const InnerContainer = styled.nav`
  ${tw`
    flex
    flex-col
    flex-wrap
    max-w-screen-2xl
    mx-auto
  `}
`;

const AboutContainer = styled.nav`
  ${tw`
  flex
  flex-col
  `}
`;

const AboutText = styled.p`
  ${tw`
  text-white
  pt-4
  font-thin
  text-sm
  max-w-xs
  leading-5
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world witch has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
