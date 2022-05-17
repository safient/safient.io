import styled from 'styled-components';
import { Button } from '../button/button';

export const HeroContainer = styled.section`
  /* background: red; */
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 18rem;
  .hero-image {
    width: 100rem;
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

  @media (max-width: 576px) {
    .hero-image {
      display: none;
    }
    h2 {
      font-size: 4rem;
    }

    .sub-heading {
      width: 90%;
      font-size: 1.8rem;
    }
    margin-top: 4rem;
  }
`;

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
  padding: 1.2rem 3.2rem;

  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #25282c;
    border: none;
  }
`;

export const Span = styled.span`
  background-color: #44bcf0;
  /* background-image: linear-gradient(45deg, #818cf8, #44bcf0); */
  background-image: linear-gradient(43deg, #e85602 0, #f5b46c 29%, #d9caf4 68%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
