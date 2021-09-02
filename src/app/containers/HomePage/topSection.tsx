import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../responsive";
import Button from "../../components/button";
const TopSectionContainer = styled.div`
  min-height: 500px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    mt-24
    px-3
    lg:px-12
   `}
`;

const LeftContainer = styled.div`
  ${tw`
  w-1/2
  flex
  flex-col 
    `}
`;

const RightContainer = styled.div`
  ${tw`
  w-1/2
  flex
  flex-col
  relative
  mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
  font-bold
  text-2xl
  xl:text-6xl
  sm:text-3xl
  md:text-5xl
  md:font-extrabold
  sm:leading-snug
  lg:leading-normal
  xl:leading-relaxed
  `}
`;

const Description = styled.p`
  max-height: 48rem;
  ${tw`
  text-xs
  lg:text-sm
  xl:text-xl
  sm:max-h-full
  overflow-hidden
  text-gray-800
  `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
  }
`;

const StandalonCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
`}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Car's With Us</Slogan>
        <Description>
          Always choose the best car from out local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like.
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button text="Sell Your Car" theme="filled" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} />
        </BlobContainer>
        <StandalonCar>
          <img src={MclarenCarImg} alt="Mclaren car" />
        </StandalonCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
