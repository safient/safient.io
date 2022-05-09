import styled from 'styled-components';
import { Button } from '../button/button';

export const HeroContainer = styled.section`
  /* height: 70vh; */
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  .hero-image {
    width: 729px;
  }

  .sub-heading {
    margin-top: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
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
  background-image: linear-gradient(45deg, #818cf8, #44bcf0);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
