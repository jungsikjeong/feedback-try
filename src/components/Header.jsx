import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(255, 106, 149);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>Feedback UI</h2>
    </StyledHeader>
  );
};

export default Header;
