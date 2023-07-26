import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  float: right;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const CustomModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

export default CustomModal;
