// Import necessary dependencies
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Circles } from "react-loader-spinner"

// Define keyframe animation for the hash loader
const hashAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

// Styled component for the Hash Loader container
const HashLoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the individual hash elements
const HashElement = styled.div`
  height: 5px;
  width: 30px;
  background-color: #F71D00; // Adjust the color as needed
  margin: 0 2px;
  transform-origin: center;
  animation: ${hashAnimation} 1.5s infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

// Hash Loader component
const HashLoader = () => {
  return (
    <HashLoaderContainer>
      <Circles
        height="80"
        width="80"
        color="#cf0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </HashLoaderContainer>
  );
};

// Export the HashLoader component
export default HashLoader;



