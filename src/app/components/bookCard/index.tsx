import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import Button from "../button";

import "react-calendar/dist/Calendar.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../responsive";

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
  px-2
  border-2
  border-gray-200
  shadow-lg
  md:py-2
  md:px-10
`}
`;

const ItemContainer = styled.div`
  ${tw`
  flex
  items-center
  relative
  px-1
  md:px-2
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

const ChevronIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-sm
    md:text-base
    pl-1 
`}
`;

const LabeledButton = styled.button`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
  hover:text-red-500
  transition-all
  duration-300
  ease-in-out
  select-none 
  `}
`;

const DateCalendar = styled(Calendar)`
  margin: 1rem 0;
  //position: absolute;
  //max-width: none;
  //user-select: none;
  //top: 3.5em;
  //left: -2em;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -9em;
    `};
` as any;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen((prevState) => !prevState);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen((prevState) => !prevState);
  };

  return (
    <>
      <CardContainer>
        <ItemContainer>
          <LabeledButton
            onClick={toggleStartDateCalendar}
            onBlur={() => setStartCalendarOpen(false)}
          >
            <Icon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            Pick Up Date
            <ChevronIcon>
              <FontAwesomeIcon
                icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
              />
            </ChevronIcon>
          </LabeledButton>
        </ItemContainer>
        <ItemContainer>
          <LabeledButton
            onClick={toggleReturnDateCalendar}
            onBlur={() => setReturnCalendarOpen(false)}
          >
            <Icon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            Return Date
            <ChevronIcon>
              <FontAwesomeIcon
                icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
              />
            </ChevronIcon>
          </LabeledButton>
        </ItemContainer>
        <Button text={isMobile ? "Book" : "Book Your Ride"} />
      </CardContainer>
      {isStartCalendarOpen && (
        <DateCalendar
          locale="hu-HU"
          value={startDate}
          onChange={setStartDate as any}
        />
      )}
      {isReturnCalendarOpen && (
        <DateCalendar
          offset
          locale="hu-HU"
          value={returnDate}
          onChange={setReturnDate as any}
        />
      )}
    </>
  );
};

export default BookCard;
