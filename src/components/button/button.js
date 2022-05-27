import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  color: #fff;
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.6rem 3.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
  }
`;

export function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
