import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './developer-resources.component.styles';

const data = [
  {
    icon: '/icons/code.svg',
    heading: 'Developers',
    description:
      'Safient maintains resources to help developers integrate their applications to seamlessly interact with safes using our SDKs.',
    linkText: 'Safient Developer Docs',
    link: 'https://docs.safient.io/',
  },
  {
    icon: '/icons/individual.svg',
    heading: 'Individuals',
    description:
      'We are working on a variety of non custodial crypto assets recovery and inheritance services on top of Safient protocol such as Safient Wallet and Safient Safes.',
    linkText: 'checkout Safient Wallet',
    link: 'https://wallet.safient.io/gm',
  },
  {
    icon: '/icons/enterprise.svg',
    heading: 'Enterprises',
    description:
      'We are working on our enterprise edition to integrate with the existing crypto exchanges and custodial wallet services in a much more scalable way.',
    linkText: 'Contact us for Enterprise Edition',
    link: 'hello@safient.io',
  },
];

export const DeveloperResources = () => {
  return (
    <FeaturesContainer>
      <h2>Whant to Get Started?</h2>
      <CardsContainer>
        {data.map(({ icon, heading, description, linkText, link }, index) => (
          <FeatureCard key={index}>
            <IconContainer>
              <img src={icon} alt='icon' />
            </IconContainer>
            <h4>{heading}</h4>
            <p>{description}</p>
            <a href={link} target='_next'>
              <p className='linkText'>{linkText}</p>
            </a>
          </FeatureCard>
        ))}
      </CardsContainer>
    </FeaturesContainer>
  );
};
