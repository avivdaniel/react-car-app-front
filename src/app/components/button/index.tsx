import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
  px-5
  py-3
  outline-none
  rounded-md
  text-white
  text-xs
  font-thin
  md:font-semibold
  border-transparent
  border-2
  focus:outline-none
  transition-all
  duration-200
  ease-in-out
  m-1
         `}
`;

const OutlineButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
    `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
    `}
`;

const Button = (props: IButtonProps) => {
  const { theme, text, className } = props;

  return theme === "filled" ? (
    <FilledButton className={className}>{text}</FilledButton>
  ) : (
    <OutlineButton className={className}>{text}</OutlineButton>
  );
};

export default Button;
