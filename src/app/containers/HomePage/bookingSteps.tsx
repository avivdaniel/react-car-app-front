import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../../responsive";
import DotedCircle from "../../../assets/images/circle.png";
import car from "../../../assets/images/jeep.png";
const Container = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    py-3
    my-8
    lg:my-40
    lg:py-6
  `}
`;

const StepsContainer = styled.div`
  max-width: 1200px;
  ${tw`
    flex
    flex-wrap
    justify-center
    mt-7
    lg:mt-16
    lg:mx-auto
  `}
`;

const StepContainer = styled.div`
  @media (min-width: ${SCREENS.lg}) {
    flex: 1;
    max-width: 400px;
    &:first-child {
      max-width: 250px;
    }
    &:not(:first-child) {
      padding-left: 150px;
      &:after {
        position: absolute;
        background-image: url(${DotedCircle});
        background-size: contain;
        background-repeat: no-repeat;
        content: "";
        left: 0;
        height: 100%;
        width: 150px;
      }
    }
  }
  //md:w-96

  ${tw`
    relative
    flex
    flex-col
    my-4
    lg:m-0
    items-center
    transition-colors
    hover:text-red-500 
  `}
`;

const Step = styled.div`
  ${tw`
    w-20
    h-20
    border-2
    rounded-lg
    bg-white
    shadow-xl
    p-1
  `}
`;
const StepTitle = styled.h4`
  ${tw`
    text-lg
    font-semibold
    mt-4
  `}
`;

const StepDescription = styled.h4`
  ${tw`
    w-1/2
    md:w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcon = styled.span`
  ${tw`
    bg-red-100
    rounded-md
    flex
    items-center
    justify-center
    w-full
    h-full
    text-red-400
    fill-current
    text-3xl
  `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    font-extrabold 
    text-center
  `}
`;

const BookingSteps = () => {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Yourcar point and book your car.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your nice car with ease in one single click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
