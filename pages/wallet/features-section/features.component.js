import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './features.component.styles';

const data = [
  {
    icon: '/icons/encrypted.svg',
    heading: 'Non-Custodial',
    description: 'We never have access to any of your data or funds. Ever.',
  },
  {
    icon: '/icons/api.svg',
    heading: 'Convenient Inheritance',
    description: 'Ensure that your safes are inherited by beneficiaries only incase of tragic events.',
  },
  {
    icon: '/icons/confidential.svg',
    heading: 'Trustless Protocol',
    description:
      'The safes are protected and governed by trustless guardians to ensure the highest degree of resilience.',
  },
];

export const FeatureSection = () => {
  return (
    <FeaturesContainer>
      <h2>We’ve got you covered</h2>
      <p className='sub-heading'>Safient Wallet has everything you need to traverse the Web3 ecosystem</p>
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
