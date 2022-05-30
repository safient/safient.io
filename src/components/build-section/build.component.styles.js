import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  margin: 10rem 0;
  .sub-heading {
    // text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 36px;
  }
  @media (max-width: 576px) {
    margin-top: 12rem;
    h2 {
      line-height: 1.4;
    }
  }
  .linkText {
    color: #5d5dff;
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
