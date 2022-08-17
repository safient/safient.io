import styled from "styled-components";

export const FeaturesContainer = styled.div`
  margin: 10rem 0;
  h2 {
    text-align: center;
    font-size: 3.6rem;
  }
  .sub-heading {
    text-align: center;
    margin-bottom: 6rem;
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 57.6rem) {
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    .sub-heading {
      font-size: 1.8rem;
    }
  }
`;

export const FeatureCard = styled.div`
  background: #181628;
  padding: 2rem 3rem 2rem 3rem;
  flex: 0 0 38.4rem;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 11px #5d5dff;
    border-image-source: linear-gradient(
      43deg,
      #e85602 0,
      #f5b46c 29%,
      #d9caf4 68%
    );
  }
  @media (max-width: 57.6rem) {
    flex: 0 0 34.4rem;
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
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    line-height: 1.9;
    font-weight: 500;
  }
  .linkText {
    color: #5d5dff;
  }
  @media (max-width: 57.6rem) {
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  display: inline-flex;
  border-radius: 50%;
  img {
    padding: 2rem;
  }
`;
