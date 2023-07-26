import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import placeholder from "../assets/placeholder.jpg"; // Import a small, lightweight placeholder image

const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  position: relative; // Add relative position here
`;

const CardMedia = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  transition: opacity 0.3s;

  ${(props) =>
    !props.loaded &&
    css`
      opacity: 0;
    `}
`;

const Placeholder = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: absolute;

  ${(props) =>
    props.isLoaded &&
    css`
      display: none;
    `}
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const CardSubtitle = styled.h3`
  font-size: 1.25rem;
  color: #757575;
  margin: 0.5rem 0;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #424242;
`;

const Card = ({ image, title, subtitle, children }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current.complete) {
      setImgLoaded(true);
    }
  }, []); // Empty array ensures this effect runs only once after initial render

  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  console.log(imgLoaded);
  return (
    <CardContainer>
      <Placeholder src={placeholder} alt={title} isLoaded={imgLoaded} />
      <CardMedia
        ref={imgRef}
        src={image}
        alt={title}
        onLoad={handleImageLoad}
        loaded={imgLoaded}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{children}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
