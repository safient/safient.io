import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './features.component.styles';

const data = [
  {
    icon: '/icons/encrypted.svg',
    heading: 'Secure Safes',
    description: 'Backup your secrets on our Safient safe that can only be recovered by you at any time.',
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
      'The safes are protected and governed by trustless guardians and arbitrators (Using Kleros) to ensure the highest degree of resilience.',
  },
];

export const Features = () => {
  return (
    <FeaturesContainer>
      <h2>What makes Safient Safes Special?</h2>
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
