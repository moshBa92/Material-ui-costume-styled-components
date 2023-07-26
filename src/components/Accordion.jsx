import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const slideDown = keyframes`
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
`;

const slideUp = keyframes`
  0% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
`;

const AccordionWrapper = styled.div`
  width: 300px;
`;

const AccordionHeader = styled.div`
  padding: 0.5em 1em;
  background: #3f51b5;
  color: #fff;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  background: #f5f5f5;
  padding: 1em;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease forwards;
  ${(props) =>
    props.isOpen &&
    css`
      animation: ${slideDown} 0.3s ease forwards;
    `}
`;

const AccordionItem = ({ index, title, children, isOpen, onClick }) => (
  <div>
    <AccordionHeader onClick={onClick}>{title}</AccordionHeader>
    <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionWrapper>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
