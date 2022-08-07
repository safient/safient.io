import styled from 'styled-components';
import { members } from './team-members';
import { TeamsCard } from './team-card.component';

export const TeamSectionContainer = styled.section`
	.sub-heading {
		margin-top: 1.6rem;
		text-align: center;
	}
	.team-members {
		display: flex;
		gap: 4rem;
		flex-wrap: wrap;
		margin-top: 4rem;
		align-items: center;
		justify-content: space-between;
	}

	h3 {
		font-size: 3.6rem;
		font-weight: 700;
		line-height: 36px;

		text-align: center;
	}

	p {
		font-size: 2rem;
		font-weight: 500;
		color: 9ba 94px;
		line-height: 36px;
		margin-top: 2rem;
	}
	@media (max-width: 576px) {
		padding: 2rem;
	}
`;

export function TeamsSection() {
	return (
		<TeamSectionContainer>
			<h3>Our Team</h3>
			<p className='sub-heading'>
				We believe people and talent are the real core value of any company and
				our most important asset. Our core team is comprised of financial,
				legal, and blockchain technology connoisseurs and a passionate
				development team with a great amount of time spent on understanding
				issues in the existing infrastructure.
			</p>
			<div className='team-members'>
				{members.map((member, index) => (
					<TeamsCard {...member} key={index} />
				))}
			</div>
		</TeamSectionContainer>
	);
}
