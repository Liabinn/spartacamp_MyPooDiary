"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  handler: () => void;
};

const Button = ({ text, handler }: Props) => {
  return <StButton onClick={handler}>{text}</StButton>;
};

export default Button;

const StButton = styled.button`
  background-color: var(--primaryColor);
  padding: 1rem 1.5rem;
  color: var(--accentColor);
  font-size: var(--p);
  border-radius: 8px;
`;
