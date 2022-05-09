import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  /* background: #5d5dff; */
  background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
  color: #fff;
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
  }
`;

export function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
