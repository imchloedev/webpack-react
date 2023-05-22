import React from 'react';
import styled from 'styled-components';
import '../css/Button.css';

const Button = () => {
  return <SButton>Button</SButton>;
};

export default Button;

const SButton = styled.div`
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
`;
