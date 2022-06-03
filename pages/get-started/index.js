import { Container } from '../../src/components';
import BuildSection from '../../src/components/build-section/build.component';
import GuardianEarlyAccess from '../../src/components/guardian-early-access/guardian-early-access.component';

function WalletPage() {
  return (
    <Container>
      <BuildSection />
      <GuardianEarlyAccess />
    </Container>
  );
}

export default WalletPage;
