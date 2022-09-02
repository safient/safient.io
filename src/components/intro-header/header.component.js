import { Span } from '../span/span.component';
import { HeaderContainer, StyledDiv } from './header.component.styles';

export const IntroHeader = () => {
  return (
    <HeaderContainer>
      <h2>
      Introducing <Span> Safient Protocol</Span>
      </h2>
      {/* <p className='sub-heading'>
      Safient proudly introduces an unique Secret Recovery and inheritance mechanism performed in a non-custodial way. The protocol can be used
      to create recovery and inheritance plans for all the self custodied crypto assets. Since the protocol is generic it can be used 
      to build solution for recovery of any digital assets, information and secrets.
        <a className='linkText' href='https://resources.safient.io/' target='_next'>
          resources page{' '}
        </a>
        . You can straight away dive into our{' '}
        <a className='linkText' href='https://docs.safient.io/core-getting-started' target='_next'>
          developer documentation
        </a>{' '}
        if you are looking to integrate a service or build on top of the protocol. Getting started with Safient to
        create claimable safes is a breeze. But feel free to reach out to us on{' '}
        <a className='linkText' href='https://discord.safient.io' target='_next'>
          Discord{' '}
        </a>{' '}
        for any queries.
      </p> */}
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
            <Span> 100 % surety </Span> at the right time, even incase of any tragic event.
            Since the protocol is generic it can be used 
      to build solution for recovery of any digital assets, information and secrets.
          </p>
        </div>

        <div className='graphics'>
          <img src='./images/why.png' alt='graphics' />
        </div>
      </StyledDiv>

      {/* <p className='sub-heading'>
      Safient proudly introduces an unique Secret Recovery and inheritance mechanism performed in a non-custodial way. The protocol can be used
      to create recovery and inheritance plans for all the self custodied crypto assets. Since the protocol is generic it can be used 
      to build solution for recovery of any digital assets, information and secrets.
        <a className='linkText' href='https://resources.safient.io/' target='_next'>
          resources page{' '}
        </a>
        . You can straight away dive into our{' '}
        <a className='linkText' href='https://docs.safient.io/core-getting-started' target='_next'>
          developer documentation
        </a>{' '}
        if you are looking to integrate a service or build on top of the protocol. Getting started with Safient to
        create claimable safes is a breeze. But feel free to reach out to us on{' '}
        <a className='linkText' href='https://discord.safient.io' target='_next'>
          Discord{' '}
        </a>{' '}
        for any queries.
      </p> */}
    </HeaderContainer>
  );
};
