import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './features.component.styles';

const data = [
  {
    icon: '/icons/key.svg',
    heading: 'Secure Non-Custodial',
    description: 'Backup your secrets on Safes that are secured by robust cryptography techniques and data stores.',
  },
  {
    icon: '/icons/check.svg',
    heading: 'Convenient Inheritance',
    description: 'Ensure that your safes are inherited by beneficiaries only incase of tragic events.',
  },
  {
    icon: '/icons/decentralized.svg',
    heading: 'Trustless Protocol',
    description:
      'The safes are protected and governed by trustless guardians to ensure the highest degree of resilience.',
  },
];

const FeatureSection = () => {
  return (
    <FeaturesContainer>
      <h2>Safient Safes</h2>
      <p className='sub-heading'>
        Safient Safe is a non custodial safe where you can store your crypto secrets that can be recovered or inherited
        at the right time.
      </p>
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
export default FeatureSection;
