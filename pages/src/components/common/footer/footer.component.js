import Link from 'next/link';
import { Container } from '../container/container.component';
import { FooterContainer, Navs, StyledDiv, Copy } from './footer.component.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Navs>
          <StyledDiv>
            <h3>About us</h3>
            <ul>
              <li>
                <a href='https://consensolabs.com/#/about' target='_next'>
                  About
                </a>
              </li>
              <li>
                <a href='https://consensolabs.com/#/team/' target='_next'>
                  Team
                </a>
              </li>
            </ul>
          </StyledDiv>
          <StyledDiv>
            <h3>Developer Resources</h3>
            <ul>
              <li>
                <a href='https://docs.safient.io/' target='_next'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='https://github.com/safient' target='_next'>
                  GitHub
                </a>
              </li>
            </ul>
          </StyledDiv>
          <StyledDiv>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href='https://www.consensolabs.com/contact' target='_next'>
                  Contact
                </a>
              </li>
              <li>
                <a href='https://angel.co/company/consensolabs/jobs' target='_next'>
                  Career
                </a>
              </li>
            </ul>
          </StyledDiv>
          <StyledDiv>
            <h3>Community</h3>
            <ul>
              <li>
                <a href='https://twitter.com/safientio' target='_next'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://discord.safient.io/' target='_next'>
                  Discord
                </a>
              </li>
              <li>
                <a href='https://blog.safient.io/' target='_next'>
                  Blog
                </a>
              </li>
            </ul>
          </StyledDiv>
        </Navs>
        <Copy>
          <div>
            <a href='https://github.com/safientio' target='_next'>
              <p> &copy; {new Date().getFullYear()} Crafted with ❣️ by Consenso Labs.</p>
            </a>
          </div>
        </Copy>
      </Container>
    </FooterContainer>
  );
};
