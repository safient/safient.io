import styled from 'styled-components';
import { Button } from '../button/button';

export const HeroContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  margin: 28rem auto;
  position: relative;
  .hero-image {
    width: 70rem;
    margin-top: 8rem;
  }

  .sub-heading {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    width: 60%;
    margin: 2rem auto;
  }
  p {
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 60px;
    line-height: 1.1;
  }

  .right {
    position: relative;
    top: -20rem;
    right: -80rem;
  }

  /* exp */
  /* .background-image-holder {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: -15em;
    z-index: 0;
    overflow: hidden;
  }
  .background-gradient {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(5%, #171e2e), to(transparent));
  }

  .background-image {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
  } */

  .left {
    position: relative;
    top: 20rem;
    right: 80rem;
  }
  @media (max-width: 57.6rem) {
    .hero-image {
      display: none;
    }
    h2 {
      font-size: 3rem;
    }

    .sub-heading {
      width: 90%;
      font-size: 2rem;
    }
    margin-top: 9rem;
  }
`;

export const StyledDiv = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2.4rem 0;
`;

export const GhostButton = styled.button`
  background: #25282c;
  border: none;
  color: #fff;
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem 3.2rem;

  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #25282c;
    border: none;
  }
`;

export const Span = styled.span`
  background-color: #44bcf0;
  background-image: linear-gradient(43deg, #e85602 0, #f5b46c 29%, #d9caf4 68%);
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
