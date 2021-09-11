import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Logo from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  background: #1d2124;
  ${tw`
    min-w-full
    px-7
    pt-12
  `}
`;

const InnerContainer = styled.nav`
  ${tw`
    flex
    flex-col
    md:flex-row
    flex-wrap
    max-w-screen-2xl
    mx-auto
  `}
`;

const HorizontalContainer = styled.div`
  ${tw`
  flex
  flex-row
  items-center
  `}
`;

const AboutContainer = styled.div`
  ${tw`
  md:mr-10
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

const SectionContainer = styled.div`
  ${tw`
  mt-4
  lg:mt-0
  md:ml-10
  flex
  flex-col
  `}
`;

const LinksList = styled.ul`
  ${tw`
  outline-none
  flex
  flex-col
  space-y-3
  `}
`;

const ListItem = styled.li`
  & > a {
    ${tw`
    transition-all
    hover:text-gray-500
  text-sm
  text-white
  `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
  text-xl
  font-bold
  text-red-500
  pb-3
  `}
`;

const RedIcon = styled.span`
  ${tw`
  w-6
  h-6
  text-xs
  md:text-sm
  md:w-8
  md:h-8
  bg-red-500
  rounded-full
  flex
  items-center
  justify-center
  text-white
  mr-2 
  `}
`;

const SmallText = styled.span`
  ${tw`
  text-white
  text-sm
  `}
`;

const BottomContainer = styled.div`
  ${tw`
  text-center
  lg:text-right
  pb-5
  pt-10
  `}
`;

const CopyrightText = styled.span`
  font-size: 11px;
  ${tw`
  text-gray-400
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
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support Link</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>
              <a href="tel:+91555-234-8469">+91 555-234-8469</a>
            </SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>
              <a href="mailto:info@yourcar.com">info@yourcar.com</a>
            </SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Aviv Daniel. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
