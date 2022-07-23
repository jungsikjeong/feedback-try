import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 768px;
  padding: 0 20px;
  margin: auto;
  height: 100vh;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
