import styled, { keyframes } from 'styled-components';

export const SectionContainer = styled.section`
  margin: 6rem 0;

  h2 {
    margin: 1rem 0;
    text-align: center;
    font-size: 36px;
  }

  p {
    margin: 1.5rem 0;
    font-size: 2rem;
    line-height: 36px;
    font-weight: 500;
  }

  @media (max-width: 57.6rem) {
    margin: 1rem 0;
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
    }

    padding: 2rem;
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
    width: 52rem;
    height: auto;
  }

  .info {
    flex: 1;
  }
  .graphics {
    align-self: flex-end !important;
  }

  @media (max-width: 57.6rem) {
    img {
      width: 100%;
    }
  }
`;
