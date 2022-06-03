import styled from 'styled-components';

export const TeckStackContainer = styled.section`
  margin: 8rem 0 8rem 0;
  h2 {
    text-align: center;
    font-size: 36px;
  }
  @media (max-width: 57.6rem) {
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
  margin-top: 6rem;
  flex-wrap: wrap;

  img {
    width: 54rem;
    height: auto;
  }
  @media (max-width: 57.6rem) {
    flex-direction: column;
    padding: 0 1rem;
    img {
      width: 100%;
    }
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
`;

export const DescriptionContainer = styled.div`
  flex: 2;
  align-self: center;
  @media (max-width: 57.6rem) {
    margin-top: -8rem;
  }
`;

export const StyledDiv = styled.div`
  margin: 2rem 0;

  h3 {
    font-size: 2.4rem;
    color: #d9e3ea;
  }
  p {
    font-weight: 500;
    font-size: 2rem;
    line-height: 36px;
  }
  @media (max-width: 57.6rem) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;
