import React, { useState } from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import Button from "../button";

import "react-calendar/dist/Calendar.css";

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
  relative
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

const LabeledButton = styled.button`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
  hover:text-red-500
  transition-all
  duration-300
  ease-in-out
  `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3.5em;
  left: -2em;
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen((prevState) => !prevState);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen((prevState) => !prevState);
  };

  return (
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
        </LabeledButton>
        {isStartCalendarOpen && (
          <DateCalendar
            locale="hu-HU"
            value={startDate}
            onChange={setStartDate as any}
          />
        )}
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
        </LabeledButton>
        {isReturnCalendarOpen && (
          <DateCalendar
            locale="hu-HU"
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
