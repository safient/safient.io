import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;

  background-size: cover;

  background-image: url('images/hero/moving-lines.png');

  background-repeat: no-repeat;
  background-position: top;

  .hero-image {
    width: 70rem;
    margin-top: 8rem;
  }

  .sub-heading {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.8;
    text-align: center;
    width: 70%;
    margin: 2rem auto;
  }
  p {
    text-align: center;
  }

  .blob-center {
    position: absolute;
    top: 60%;
    left: -50%;
    transform: rotate(-180deg);
    z-index: -10;
  }
  .blob-right {
    position: absolute;
    z-index: -10;
    top: -70%;
    right: 30%;
  }
  .blob-left {
    position: absolute;
    z-index: -10;
    top: -100%;
  }
  .blob-bottom {
    position: absolute;
    z-index: -10;
    left: 100%;
    top: 60%;
    bottom: 10%;
  }

  .lines {
    position: absolute;
    z-index: -10;
  }

  @media (max-width: 57.6rem) {
    .hero-image {
      display: none;
    }
    h2 {
      font-size: 3rem;
    }

    .sub-heading {
      width: 90%;
      font-size: 2rem;
    }
    .blob-center,
    .blob-right,
    .blob-center,
    .blob-left,
    .blob-bottom {
      display: none;
    }
    margin-top: 9rem;
  }
`;
export const HeroContentContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 5.4rem;
    line-height: 1.1;
  }

  .sub-heading {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.6;
    text-align: center;
    width: 70%;
    margin: 2rem auto;
  }
  @media (max-width: 57.6rem) {
    width: 100%;
    margin: 0 auto;
    h2 {
      text-align: center;
      font-size: 3rem;
      line-height: 1.1;
    }

    .sub-heading {
      font-size: 2rem;
      width: 90%;
      margin: 2rem auto;
    }
    .blob-center,
    .blob-right,
    .blob-center,
    .blob-left,
    .blob-bottom {
      display: none;
    }
    /* margin-top: 9rem; */
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3.8rem 0;
`;

export const GhostButton = styled.button`
  background: #25282c;
  /* remove this */
  background: #181628;
  border: none;
  color: #fff;
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem 3.2rem;

  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #25282c;
    border: none;
  }
`;

export const Span = styled.span`
  background-color: #44bcf0;
  background-image: linear-gradient(43deg, #e85602 0, #f5b46c 29%, #d9caf4 68%);
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
