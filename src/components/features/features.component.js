import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './features.component.styles';

const data = [
  {
    icon: '/icons/key.svg',
    heading: 'Secure Safes',
    description: 'Backup your secrets on Safes that are secured by robust cryptography techniques and data stores.',
  },
  {
    icon: '/icons/check.svg',
    heading: 'Convenient Claimable Safes',
    description: 'The safes are recovered by the beneficiaries only after the pre-specified claim conditions are met.',
  },
  {
    icon: '/icons/decentralized.svg',
    heading: 'Trustless Protocol',
    description:
      'Safes are guarded by trustless guardians and arbitrators to ensure the highest degree of resilience',
  },
];

export const Features = () => {
  return (
    <FeaturesContainer>
      <h2>What makes Safient special?</h2>
      <CardsContainer>
        {data.map(({ icon, heading, description }, index) => (
          <FeatureCard key={index}>
            <IconContainer>
              <img src={icon} alt='icon' />
            </IconContainer>
            <h4>{heading}</h4>
            <p>{description}</p>
          </FeatureCard>
        ))}
      </CardsContainer>
    </FeaturesContainer>
  );
};
