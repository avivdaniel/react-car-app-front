import React from "react";
import styled from "styled-components/macro";
import { ICar } from "../../../typings/cars";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 25.2em;
  ${tw`
  flex
  flex-col
  p-3
  pb-4  
  bg-white
  rounded-md
  m-1
  sm:m-3
  md:m-6
  shadow-xl
  space-y-2
  `}
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
  font-bold
  mt-1
  `}
`;

const PricesContainer = styled.div`
  ${tw`
  w-full
  flex
  justify-start
  mt-3
  `}
`;

const SmallText = styled.span`
  color: inherit;
  ${tw`
    text-xs
    font-thin
  `}
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    mr-3
    text-sm
  `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const CarDetailsContainer = styled.div`
  ${tw`
  flex
  w-full
  justify-between
  pb-4
 `}
`;

const CarDetail = styled.div`
  ${tw`
  flex
  items-center
 `}
`;

const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
 `}
`;

const RentButton = styled(Button)`
  ${tw`
  min-w-full
  shadow-xl
`}
`;

const Car = (props: ICarProps) => {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
};

export default Car;
