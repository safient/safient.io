import { FeatureCard, FeaturesContainer, CardsContainer, IconContainer } from './body.component.styles';
import { Span } from '../span/span.component';

export const IntroBody = () => {
  return (
    <FeaturesContainer>
      <CardsContainer>
          <FeatureCard >
            <h4>Safient Solutions</h4>
            <p>We at Safient have built a few solutions leveraging our own secret recovery and inheritance mechanism.</p>
             <p>  <span className='solutionText'> Safient Wallet 📱</span>   <a className='linkText' href='https://wallet.safient.io/gm' target='_next'>
              ( https://wallet.safient.io )</a> - A Non-custodial Recoverable and Inheritable wallet application</p>

              <p>  <span className='solutionText'> Safient Voucher 🎁</span>   <a className='linkText' href='https://voucher.safient.io' target='_next'>
              ( https://voucher.safient.io )</a> - Safest and Convenient way to gift Crypto without intermediaries </p>

              <p>  <span className='solutionText'>  Inheritable Safes 🔒 </span>   <a className='linkText' href='https://safient.io/safes ' target='_next'>
              ( https://safient.io/safes )</a> - Recovery and Inheritance solution for crypto and other digital assets.</p>

            <p className='whiteText'>Feel free to get in touch with us through any of the below mediums 🤝.</p>
            <ul>

            <li>
							<a href="https://discord.safient.io" target='_next'>
								<i className='fa-brands fa-discord' />
							</a>
						</li>
				
						<li>
							<a href="https://twitter.com/safientio" target='_next'>
								<i className='fa-brands fa-twitter' />
							</a>
						</li>

            <li>
							<a href="https://github.com/safient" target='_next'>
								<i className='fa-brands fa-github' />
							</a>
						</li>
				</ul>
          </FeatureCard>

      </CardsContainer>
    </FeaturesContainer>
  );
};
