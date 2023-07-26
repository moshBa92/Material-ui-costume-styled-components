import React, { useReducer } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875em;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        [action.fieldName]: {
          ...state[action.fieldName],
          value: action.payload
        }
      };
    case "VALIDATE_FIELDS":
      const fieldName = action.fieldName;
      if (fieldName === "name") {
        return {
          ...state,
          [fieldName]: {
            ...state[fieldName],
            isValid: !!state[fieldName].value
          }
        };
      } else if (fieldName === "email") {
        return {
          ...state,
          [fieldName]: {
            ...state[fieldName],
            isValid: validateEmail(state[fieldName].value)
          }
        };
      }
      return state;
    default:
      return state;
  }
};

const CustomForm = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: { value: "", error: "Name field cannot be empty", isValid: false },
    email: { value: "", error: "Enter a valid email", isValid: false }
  });

  const handleInputChange = (e) => {
    dispatch({
      type: "SET_FIELD_VALUE",
      fieldName: e.target.name,
      payload: e.target.value
    });
  };

  const handleBlur = (e) => {
    dispatch({ type: "VALIDATE_FIELDS", fieldName: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FIELDS", fieldName: "name" });
    dispatch({ type: "VALIDATE_FIELDS", fieldName: "email" });
    const isFormValid = Object.values(formState).every(
      (field) => field.isValid
    );
    if (isFormValid) {
      alert("Form is valid and ready to submit!");
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={formState.name.value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {!formState.name.isValid && (
        <ErrorMessage>{formState.name.error}</ErrorMessage>
      )}
      <Input
        name="email"
        label="Email"
        value={formState.email.value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {!formState.email.isValid && (
        <ErrorMessage>{formState.email.error}</ErrorMessage>
      )}
      <Button type="submit" buttonText="Submit" />
    </FormWrapper>
  );
};

export default CustomForm;
