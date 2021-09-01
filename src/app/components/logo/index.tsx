import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import styled from "styled-components/macro";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
     flex
     items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    font-bold
    text-xl
    md:text-2xl
`}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="car logo" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
