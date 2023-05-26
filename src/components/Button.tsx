import React, { Children } from 'react';
import styled from 'styled-components';
// import '../css/Button.css';

interface IButton {
  children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
  return <SButton>{children}</SButton>;
};

export default Button;

const SButton = styled.button`
  width: auto;
  height: 50px;
  color: black;
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 18px;
  }
`;
