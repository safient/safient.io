import styled from 'styled-components';

export const StyledSpan = styled.span`
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Span = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};
