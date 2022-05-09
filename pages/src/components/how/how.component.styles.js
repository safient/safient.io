import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: 8rem 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h2,
  p {
    text-align: center;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 3.2rem;
  flex-wrap: wrap;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  p {
    text-align: left;
  }
`;

export const PreviewContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  aligh-items: center;
  /* justify-content: center; */
  background: #25282c;
  /* height: 0px; */
  margin-top: 2rem;
  width: 100%;
  padding: 4rem;
  h4 {
    color: #5d5dff;
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
`;

export const StyledDiv = styled.div`
  padding: 2rem;
  background: #25282c;
  border-radius: 0.5rem;
  margin-top: 2rem;
  h4 {
    color: #5d5dff;
    margin-bottom: 1rem;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px #5d5dff;
  }
`;
