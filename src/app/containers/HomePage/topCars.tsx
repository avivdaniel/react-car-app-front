import React, { useState } from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { ICar } from "../../../typings/cars";
import Car from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../responsive";

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
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

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

  const cars = [
    <Car {...testCar3} />,
    <Car {...testCar3} />,
    <Car {...testCar3} />,
    <Car {...testCar3} />,
    <Car {...testCar3} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Out Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
          slides={cars}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};

export default TopCars;
