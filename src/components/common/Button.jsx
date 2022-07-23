import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  color: #333;
  border: 0;
  background-color: #202142;
  color: #fff;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      color: #000;
    `};
`;

const Button = ({ children, type, disabled }) => {
  // disabled가 false면 비활성화 해제됨
  return (
    <ButtonStyled type={type} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  disabled: false,
};

Button.prototype = {};

export default Button;
