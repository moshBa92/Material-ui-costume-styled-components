import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? "0" : "50%")};
  left: 10px;
  background-color: #ffff;
  padding: 2px;
  transform: translateY(-50%);
  transition: 0.3s ease all;
  font-size: ${(props) => (props.active ? "0.75em" : "1em")};
  color: ${(props) => (props.active ? "#3f51b5" : "initial")};
`;

const InputWrapper = styled.div`
  position: relative;
  padding: 5px;
  border: 1px solid ${(props) => (props.active ? "#3f51b5" : "#ccc")};
  transition: border-color 0.3s ease;
  min-width: 250px;
  border-radius: 0.5rem;
`;

const InputField = styled.input`
  width: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 10px 5px;
  padding-left: 10px;
`;

const CustomInput = ({ label, ...props }) => {
  const [active, setActive] = useState(false);

  const handleFocus = useCallback(() => setActive(true), []);
  const handleBlur = useCallback((e) => {
    if (!e.target.value) {
      setActive(false);
    }
  }, []);

  const isActive = active || props.value;

  return (
    <InputWrapper active={isActive}>
      <InputField {...props} onFocus={handleFocus} onBlur={handleBlur} />
      <Label active={isActive}>{label}</Label>
    </InputWrapper>
  );
};

export default CustomInput;
