
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styled component for the individual hash elements
const HashElement = styled.div`
  height: 4px;
  width: 20px;
  background-color: #F71D00; // Adjust the color as needed
  margin: 0 2px;
  transform-origin: center;
  animation: ${hashAnimation} 1.5s infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

// Hash Loader component
const LocationLoader = () => {
    return (
        <>
            <HashLoaderContainer>
                <HashElement delay="0s" />
                <HashElement delay=".1s" />
                <HashElement delay=".2s" />
                <span>Looking for your location!</span>
                <HashElement delay=".3s" />
                <HashElement delay=".4s" />
                <HashElement delay=".5s" />
            </HashLoaderContainer>
        </>
    );
};

// Export the HashLoader component
export default LocationLoader;