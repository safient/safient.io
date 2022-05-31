import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: 10rem 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 57.6rem) {
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    /* margin-top: 12rem; */
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 32px;
      font-weight: 500;
    }
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  p {
    text-align: left;
  }

  @media (max-width: 57.6rem) {
    order: 1;
  }
`;

export const PreviewContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  background: #25282c;
  margin-top: 2rem;
  width: 100%;
  padding: 4rem;
  order: 2;
  h4 {
    // color: #5d5dff;
    margin-bottom: 5rem;
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  span {
    background: #5d5dff;
    color: #fff;
    padding: 1rem;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  img {
    width: 548px;
  }

  @media (max-width: 57.6rem) {
    order: 2;
    img {
      max-inline-size: 100%;
      block-size: auto;
      aspect-ratio: 2/1;
      object-fit: cover;
      object-position: top center;
    }
  }
`;

export const StyledDiv = styled.div`
  padding: 2rem;
  background: #25282c;
  border-radius: 0.5rem;
  margin-top: 2rem;
  h3 {
    color: #d9e3ea;
    margin-bottom: 1rem;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px #5d5dff;
  }
`;
