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
              Trustless crypto asset <Span>Safe</Span> and <Span>Inheritance</Span> Protocol
            </h2>
            <p className='sub-heading'>
              Manage your crypto secrets securely and conveniently that help you or your beneficiaries to claim crypto
              assets without intermediaries.
            </p>
            <ButtonContainer>
              <Button>Try Now</Button>
              <GhostButton>Read More</GhostButton>
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
