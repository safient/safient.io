import { SectionContainer, StyledDiv } from './why-section.component.styles';

export const WhySection = () => {
  return (
    <SectionContainer>
      <h2>Why Safient?</h2>
      <StyledDiv>
        <div className='info'>
          <p>
            Have you ever wondered how will you pass on your valuable crypto assets to your loved ones in case of an
            unfortunate event, or what happens when you no longer have access to your unsafe secret backup ?
          </p>

          <p>
            Worry no more, Safient will help you securely manage all the critical information that is needed to access
            and recover the assets so that your loved ones can inherit them with 100 % surety incase of any tragic
            event.
          </p>
        </div>

        <div className='graphics'>
          <img src='./features/features.png' alt='' />
        </div>
      </StyledDiv>
    </SectionContainer>
  );
};
