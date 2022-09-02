import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 10rem 0 2rem 0;
  .sub-heading {
    font-size: 2.2rem;
    line-height: 40px;
    font-weight: 500;
  }
  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 1.5rem 0;
    font-size: 2rem;
    line-height: 36px;
    font-weight: 500;
  }

  .linkText {
    color: #5d5dff;
  }

  @media (max-width: 576px) {
    margin-top: 2rem;
    padding: 2rem;
    h2 {
      text-align: center;
      font-size: 3.0rem;
    }
    .sub-heading {
      font-size: 1.8rem;
    }
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
    width: 45rem;
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
      width: 85%;
    }
  }
`;