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
    font-size: 2.2rem;
    line-height: 1.6;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    margin: 1rem 0;
    h2 {
      text-align: center;
    }
    p {
      text-align: justify;
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
    width: 520px;
    height: auto;
  }

  .info {
    flex: 1;
  }
  .graphics {
    /* flex: 1; */
    align-self: flex-end !important;
    /* position: relative; */
  }

  @media (max-width: 576px) {
    img {
      width: 100%;
    }
  }
`;
