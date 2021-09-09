import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import styled from "styled-components/macro";
import tw from "twin.macro";

interface ILogoProps {
  color?: "white" | "black";
}
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
    ml-2
    md:text-2xl
`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = (props: ILogoProps) => {
  const { color = "dark" } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="car logo" />
      </Image>
      <LogoText color={color}>Yourcar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
