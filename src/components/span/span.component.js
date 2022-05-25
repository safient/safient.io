import styled from 'styled-components';

export const StyledSpan = styled.span`
  background-color: #44bcf0;
  /* background-image: linear-gradient(45deg, #818cf8, #44bcf0); */
  background-image: linear-gradient(43deg, #e85602 0, #f5b46c 29%, #d9caf4 68%);
  /* background-image: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #9363f9 30.11%, #e55a54 97.41%); */

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
