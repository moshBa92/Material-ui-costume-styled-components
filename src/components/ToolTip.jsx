import React from "react";
import styled from "styled-components";

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  width: 100%;
  white-space: nowrap;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid;
    border-color: #555 transparent transparent transparent;
  }

  ${TooltipWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = ({ children, content }) => (
  <TooltipWrapper>
    {children}
    <TooltipText>{content}</TooltipText>
  </TooltipWrapper>
);

export default Tooltip;
