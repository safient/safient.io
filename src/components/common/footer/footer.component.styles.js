import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 5rem 0 1rem;
  @media (max-width: 57.6rem) {
    padding: 3rem;
  }
`;

export const Navs = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-top: 1px solid #9ba9b4;
  padding: 8rem 0 4rem 0;
  @media (max-width: 57.6rem) {
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const StyledDiv = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: #d9e3ea;
  }
  ul {
    margin: 2rem 0;
  }

  li {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;
    color: #9ba9b4;
    margin: 1rem 0;
  }
  li:hover {
    color: #5d5dff;
    cursor: pointer;
  }

  span {
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    background: #02b07c;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  @media (max-width: 57.6rem) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #5d5dff;
    cursor: pointer;
  }
  @media (max-width: 57.6rem) {
    text-align: center;
  }
`;
