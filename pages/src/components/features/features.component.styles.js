import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  margin: 10rem 0;
`;

export const FeatureCard = styled.div`
  background: #1d1f22;
  padding: 4rem;
  flex: 0 0 38.4rem;
  transition: box-shadow 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 11px #5d5dff;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin-top: 4rem;

  h4 {
    margin-top: 2rem;
    color: #d9e3ea;
  }

  p {
    margin-top: 1rem;
    line-height: 1.9;
  }
`;

export const IconContainer = styled.div`
  background: #5d5dff;
  display: inline-flex;

  border-radius: 50%;

  img {
    padding: 2rem;
  }
`;
