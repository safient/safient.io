import FeatureSection from '../../src/components/features-section/features.component';
import SafeEarlyAccess from '../../src/components/safe-early-access/safe-early-access.component';
import { HowItWorks } from '../../src/components/how/how.component';

function WalletPage() {
  return (
    <div>
      <FeatureSection />
      <HowItWorks />
      <SafeEarlyAccess />
      
    </div>
  );
}

export default WalletPage;
