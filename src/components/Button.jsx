import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f51b5;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 150px;
  min-height: 50px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #303f9f;
  }

  &:active {
    background-color: #283593;
    transform: scale(0.95);
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: not-allowed;
  }
`;

const CustomButton = ({ buttonText, disabled = false, ...props }) => {
  return (
    <ButtonWrapper disabled={disabled} {...props}>
      {buttonText}
    </ButtonWrapper>
  );
};

export default CustomButton;
