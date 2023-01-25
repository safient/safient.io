import styled from "styled-components";
import { Container } from "../src/components";
import { TeamsSection } from "../src/components/about-section/team.component";

const AboutContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  margin-top: 4rem;
  h3 {
    color: #d9e3ea;
    font-size: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  .principles {
    margin-top: 1rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <TeamsSection />
    </AboutContainer>
  );
};

export default About;
