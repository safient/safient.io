import FeatureSection from '../../src/components/features-section/features.component';
import SafeEarlyAccess from '../../src/components/safe-early-access/safe-early-access.component';
import { HowItWorks } from '../../src/components/how/how.component';
import { Container } from '../../src/components';

function WalletPage() {
  return (
    <Container>
      <FeatureSection />
      <HowItWorks />
      <SafeEarlyAccess />
    </Container>
  );
}

export default WalletPage;
