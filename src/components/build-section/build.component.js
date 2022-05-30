import { Span } from '../span/span.component';
import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './build.component.styles';


 const BuildSection = () => {
  return (
    <FeaturesContainer>
      <h2>Build on <Span>Safient Protocol</Span></h2>
      <p className='sub-heading'>Safient protcol is a a composable protocol that can be integrated with any services or can be used to build your own service.</p>
      <p className='sub-heading'>If you are looking to get started and know more about Safient Protcol, you can checkout our <a className="linkText" href="https://resources.safient.io/" target="_next" >resources page </a>. </p>
      <p>You can straight away dive into our <a className="linkText" href="https://docs.safient.io/core-getting-started" target="_next">developer documentation</a> if you are looking to integrate a service or build on top of the protocol.
      Getting started with Safient to create claimable safes is a breeze. But feel free to reach out to us on <a className="linkText" href="https://discord.safient.io" target="_next">Discord </a> for any queries.
      </p>

    </FeaturesContainer>
  );
};
export default BuildSection
