import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  position: relative;
  margin: 20px 0;
  background-color: #fff;
  border-radius: 15px;
  padding: 40px 50px;

  ${(props) =>
    props.reverse &&
    css`
      background-color: #131428;
      color: #fff;
    `};
`;

const Card = ({ children, reverse }) => {
  return <StyledCard reverse={reverse}>{children}</StyledCard>;
};

Card.defaultProps = {
  reverse: false,
};

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
