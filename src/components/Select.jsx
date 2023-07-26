import React, { useState } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: 250px;
  min-width: 250px;
`;

const SelectLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: 0.3s ease all;
  background-color: #ffffff;
  padding: 0 5px;

  ${(props) =>
    props.active &&
    `
      top: 0;
      font-size: 0.75em;
      color: #3f51b5;
    `}
`;

const SelectField = styled.select`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  appearance: none;
  background: #ffffff
    url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z"/></svg>')
    no-repeat 95% 50%;

  &:focus {
    border-color: #3f51b5;
  }

  &:focus + ${SelectLabel} {
    top: 0;
    font-size: 0.75em;
    color: #3f51b5;
  }
`;

const CustomSelect = ({ label, options, ...props }) => {
  const [active, setActive] = useState(false);

  const handleFocus = () => setActive(true);
  const handleBlur = (e) => !e.target.value && setActive(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <SelectWrapper>
      <SelectField
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
      <SelectLabel active={active || props.value}>{label}</SelectLabel>
    </SelectWrapper>
  );
};

export default CustomSelect;
