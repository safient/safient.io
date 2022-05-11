import Image from 'next/image';
import { Container } from '../common/container/container.component';
import { ButtonContainer, GhostButton, HeroContainer, Span, StyledDiv } from './hero.component.styles';
import { Button } from '../button/button';
export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <StyledDiv>
          <div>
            <h2>
              Recover and Inherit your  <Span>crypto assets</Span> using <Span>Safient Safes</Span>
            </h2>
            <p className='sub-heading'>
              Manage your crypto secrets securely and conveniently that help you or your beneficiaries to claim crypto
              assets without intermediaries.
            </p>
            <ButtonContainer>
              <a href="https://try.safient.io/"><Button>Try Now</Button></a>
              <a href="https://resources.safient.io/"><GhostButton>Read More</GhostButton></a>
            </ButtonContainer>
          </div>
          <div>
            <img src='/features/hero.svg' alt='hero' className='hero-image' />
          </div>
        </StyledDiv>
      </Container>
    </HeroContainer>
  );
};
