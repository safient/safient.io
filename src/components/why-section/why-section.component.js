import { Span } from '../span/span.component';
import { SectionContainer, StyledDiv } from './why-section.component.styles';

export const WhySection = () => {
  return (
    <SectionContainer>
      <h2>Why Safient?</h2>
      <StyledDiv>
        <div className='info'>
          <p>
            Have you ever wondered how will you recover or pass on your{' '}
            <Span>valuable crypto assets, secret instructions </Span> to your loved ones in case of an unfortunate
            event, or what happens when you no longer have access to your unsafe secret backup ?
          </p>

          <p>
            Worry no more, Safient protocol will help you securely manage all the critical information in a
            non-custodial way and help recover or inherit the assets so that your loved ones have access to them with{' '}
            <Span> 100 % surety </Span> incase of any tragic event.
          </p>
        </div>

        <div className='graphics'>
          <img src='./images/hero.png' alt='graphics' />
        </div>
      </StyledDiv>
    </SectionContainer>
  );
};
