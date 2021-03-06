import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { SCREENS } from "../../responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.section`
  ${tw`
    bg-gray-100
    w-full
    lg:flex
    lg:flex-wrap
    items-center
    justify-center
    py-14
    px-7
    mb-8
    md:px-0
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 23em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 43em;
    margin-left: -10em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    lg:w-1/2
    flex
    flex-col
    md:ml-6
    md:px-10
  
  `}
`;

const SectionTitle = styled.h2`
  ${tw`
    font-bold
    text-red-500
    my-4
  `}
`;

const Title = styled.h2`
  ${tw`
    text-2xl
    md:text-5xl
    font-extrabold
    md:leading-normal
  `}
`;

const InfoText = styled.p`
  ${tw`
    lg:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4 
  `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="Jeep Car" />
      </CarContainer>
      <InfoContainer>
        <SectionTitle>About Us</SectionTitle>
        <Title>Fell The Best Experience With Out Rental Deals</Title>
        <InfoText>
          What about scaling components to a global audience? this is
          meaningless nor cloud strategy. Guerrilla marketing product market fit
          we're ahead of the curve on that one, and have bandwidth no need to
          talk to users, just base it on the space calculator but we've got kpis
          for that killing it. Low hanging fruit eat our own dog food. Radical
          candor old boys club face time. Cannibalize Bob called an all-hands
          this afternoon, so market-facing, or note for the previous submit: the
          devil should be on the left shoulder shotgun approach, yet big data.
          Close the loop guerrilla marketing ramp up innovation is hot right now
          yet all hands on deck drive awareness to increase engagement.
          Anti-pattern crisp ppt currying favour.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
