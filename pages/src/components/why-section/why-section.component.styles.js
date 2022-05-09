import styled, { keyframes } from 'styled-components';

export const Ripple = keyframes`

0% {
    box-shadow: 0 0 0 0 rgba(red, 0.3),
                0 0 0 1em rgba(red, 0.3),
                0 0 0 3em rgba(red, 0.3),
                0 0 0 5em rgba(red, 0.3);
  }
  100% {
    box-shadow: 0 0 0 1em rgba(red, 0.3),
                0 0 0 3em rgba(red, 0.3),
                0 0 0 5em rgba(red, 0.3),
                0 0 0 8em rgba(red, 0);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SectionContainer = styled.section`
  margin: 2rem 0;

  h2 {
    margin: 1rem 0;
  }

  p {
    margin: 1.5rem 0;
  }
  .circle-ripple {
    background-color: #35ffc3;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    -webkit-animation-name: ${pulse} 0.7s linear infinite;
    /* position: absolute; */
  }
`;

export const StyledDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8rem;

  img {
    display: block;
    width: 520px;
    height: auto;
  }

  .info {
    flex: 1;
  }
  .graphics {
    /* flex: 1; */
    align-self: flex-end !important;
    /* position: relative; */
  }
`;
