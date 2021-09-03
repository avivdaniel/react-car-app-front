import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";

const CardContainer = styled.div`
  min-height: 4.3em;
  ${tw`
  flex
  justify-center
  items-center
  rounded-md
  bg-white
  divide-x-2
  divide-gray-300
  py-1
  px-3
  shadow-xl
  border-2
  border-gray-200
  md:py-2
  md:px-10
`}
`;

const ItemContainer = styled.div`
  ${tw`
  flex
  items-center
  px-2
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const Name = styled.span`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
  `}
`;

const BookCard = () => {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
