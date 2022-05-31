import styled from 'styled-components';

export const BuildContainer = styled.div`
  margin: 10rem 0 2rem 0;
  .sub-heading {
    font-size: 2.2rem;
    line-height: 40px;
    font-weight: 500;
  }
  h2 {
    text-align: center;
    font-size: 2.7rem;
    margin-bottom: 2rem;
  }

  .linkText {
    color: #5d5dff;
  }

  @media (max-width: 576px) {
    margin-top: 2rem;
    padding: 2rem;
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    .sub-heading {
      font-size: 1.8rem;
    }
  }
`;
