import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { ICar } from "../../../typings/cars";
import Car from "../../components/car";

const TopCarsContainer = styled.div`
  ${tw`
      max-w-screen-xl
      w-full
      flex
      flex-col
      items-center
      justify-center
      px-4
      md:px-0
      mb-10
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

const CarsContainer = styled.div`
  ${tw`
   w-full
   flex
   flex-wrap
   justify-center
   mt-7
   md:mt-10
  `}
`;

const TopCars = () => {
  const testCar3: ICar = {
    name: "audi S3 Car",
    mileage: "10K",
    thumbnailSrc:
      "https://cdn.jdpower.com/models/640X480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Out Top Deals</Title>
      <CarsContainer>
        <Car {...testCar3} />
        <Car {...testCar3} />
        <Car {...testCar3} />
      </CarsContainer>
    </TopCarsContainer>
  );
};

export default TopCars;
