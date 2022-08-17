import styled from "styled-components";

export const RoadMapContainer = styled.section`
  border-radius: 0.5rem;
  @media (max-width: 57.6rem) {
    margin: 0 1rem;
  }
`;

export const RoadMaps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 1rem 3rem 1rem;
  gap: 0rem;
  flex-wrap: wrap;
`;

export const YearContainer = styled.div`
  align-self: auto;

  p {
    color: #d9e3ea;
    font-weight: 900;
    text-align: left;
    margin: 1rem 0rem 1rem 0rem;
  }
`;

export const Description = styled.div`
  max-width: 78rem;
  background: #181628;
  padding: 2rem 3rem 2rem 3rem;
  h4 {
    color: #d9e3ea;
    font-weight: 500;
  }

  .details {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const TimeFrameContainer = styled.div`
  margin-bottom: 8rem;
  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }
  li {
    list-style: square;
  }
`;
