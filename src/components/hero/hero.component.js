import Link from 'next/link';
import { ButtonContainer, GhostButton, HeroContainer, StyledDiv, HeroContentContainer } from './hero.component.styles';
import { Button } from '../button/button';
import { Span } from '../span/span.component';
export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        {/* <div className='blob-center'>
          <img src='/images/hero/blob-03.svg' alt='' />
        </div>
        <div className='blob-right'>
          <img src='/images/hero/blob-01.svg' alt='' width='90px' />
        </div>
        <div className='blob-left'>
          <img src='/images/hero/blob-02.svg' alt='' width='210px' />
        </div>
        <div className='blob-bottom'>
          <img src='/images/hero/blob-04.svg' alt='' width='100px' />
        </div>


        */}

        <HeroContentContainer>
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
        </HeroContentContainer>
      </div>
      {/* <div>
          <img src='/features/hero.svg' alt='hero' className='hero-image' />
        </div> */}
    </HeroContainer>
  );
};
