import styled from "styled-components";

export const FeaturesContainer = styled.div`
  margin: 10rem 0;
  h2 {
    text-align: center;
    font-size: 36px;
  }
  @media (max-width: 576px) {
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export const FeatureCard = styled.div`
  background: #181628;
  padding: 2rem 3rem 2rem 3rem;
  flex: 0 0 38.4rem;
  border-radius: 0.5rem;
  @media (max-width: 57.6rem) {
    flex: 0 0 34.4rem;
  }
`;

export const CardsContainer = styled.div`
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
    color: #9ba9b4;
    font-weight: 500;
  }
  @media (max-width: 57.6rem) {
    justify-content: center;
  }
  ul {
		display: flex;
		color: #fff;
		margin-top: 2rem;
		gap: 2rem;
		cursor: pointer;
	}
	i {
		font-size: 2.4rem;
		&:hover {
			color: #6663fd;
		}
	}
	a {
		color: #fff;
	}
  .linkText {
    color: #5d5dff;
  }
  .solutionText {
    color: #14acb6;
  }
  .whiteText {
    color: #fff;
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

