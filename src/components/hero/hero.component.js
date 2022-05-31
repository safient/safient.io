import Link from 'next/link';
import { ButtonContainer, GhostButton, HeroContainer, StyledDiv } from './hero.component.styles';
import { Button } from '../button/button';
import { Span } from '../span/span.component';
export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h2>
          Non-custodial secret <Span>Recovery</Span> and <Span>Inheritance</Span> Protocol
        </h2>
        <p className='sub-heading'>
          Manage your crypto secrets securely and conveniently that help you or your beneficiaries to claim crypto
          assets without intermediaries.
        </p>
        <ButtonContainer>
          <Link href='/get-started'>
            <Button>Get Started</Button>
          </Link>
          <GhostButton onClick={() => window.open('https://resources.safient.io/')}>Learn More</GhostButton>
        </ButtonContainer>
      </div>
      {/* <div>
          <img src='/features/hero.svg' alt='hero' className='hero-image' />
        </div> */}
    </HeroContainer>
  );
};
