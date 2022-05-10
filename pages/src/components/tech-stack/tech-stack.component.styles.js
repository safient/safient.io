import styled from 'styled-components';

export const TeckStackContainer = styled.section`
  margin: 8rem 0 8rem 0;
  h2 {
    text-align: center;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
  margin-top: 6rem;
  flex-wrap: wrap;

  img {
    width: 540px;
    height: auto;
  }
  @media (max-width: 576px) {
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
  @media (max-width: 576px) {
    margin-top: -8rem;
  }
`;

export const StyledDiv = styled.div`
  margin: 2rem 0;

  h3 {
    font-size: 2.4rem;
    color: #d9e3ea;
  }
`;
