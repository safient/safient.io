import { useState } from 'react';
import { Span } from '../span/span.component';
import {
	SectionContainer,
	StepsContainer,
	DescriptionContainer,
	PreviewContainer,
	StyledDiv,
} from './how.component.styles';

export const HowItWorks = () => {
	const [tab, setTab] = useState('tab1');

	return (
		<SectionContainer>
			<h2>How it works?</h2>
			<p>
				Safient follows three simple steps to claim or inherit the crypto
				assets.
			</p>
			<StepsContainer>
				<DescriptionContainer>
					<StyledDiv
						style={{ border: tab === 'tab1' && '1px solid #5d5dff' }}
						onClick={() => setTab('tab1')}
					>
						<h3>
							<Span>Create</Span> a Safe
						</h3>
						<p>
							The user creates a safe for wallet seed phrases or secret notes.
							Beneficiaries for the safe can be added at any time.
						</p>
					</StyledDiv>
					<StyledDiv
						style={{ border: tab === 'tab2' && '1px solid #5d5dff' }}
						onClick={() => setTab('tab2')}
					>
						<h3>
							Request to <Span> Claim </Span> the Safe
						</h3>
						<p>
							The safe owner or beneficiaries can request to claim or inherit
							the safe at anytime.
						</p>
					</StyledDiv>
					<StyledDiv
						style={{ border: tab === 'tab3' && '1px solid #5d5dff' }}
						onClick={() => setTab('tab3')}
					>
						<h3>
							<Span>Recover</Span> the Safe
						</h3>
						<p>
							The trustless safe guardians will help recover the safes, quickly
							and safely after verifying the recovery claim.
						</p>
					</StyledDiv>
				</DescriptionContainer>

				<PreviewContainer>
					{/* preview */}
					{tab == 'tab1' && (
						<>
							<h4> Creating a safe</h4>
							<div>
								<img src='/images/how1.gif' alt='img' />
							</div>
						</>
					)}

					{tab == 'tab2' && (
						<>
							<h4>Claiming the safe</h4>
							<div>
								<img src='/images/how2.gif' alt='img' />
							</div>
						</>
					)}

					{tab == 'tab3' && (
						<>
							<h4>Recovering the safe</h4>
							<div>
								<img src='/images/how3.gif' alt='img' />
							</div>
						</>
					)}
				</PreviewContainer>
			</StepsContainer>
		</SectionContainer>
	);
};
