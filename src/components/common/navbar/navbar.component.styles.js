import styled from 'styled-components';

export const HeaderContainer = styled.header`
	height: 9rem;
	padding: 2rem;
	position: sticky;
	top: 0;
	background: transparent;
	backdrop-filter: saturate(180%) blur(20px);
	z-index: 50;
`;

export const NavbarContainer = styled.nav`
	max-width: 140rem;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	img {
		width: 110px;
		height: auto;
		cursor: pointer;
	}
	h2 {
		color: #d9e3ea;
		font-size: 2rem;
	}
	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		color: #d9e3ea;

		@media (max-width: 57.6rem) {
			display: none;
		}
	}
	li {
		font-weight: 600;
	}
	li:hover {
		color: #5d5dff;
		cursor: pointer;

		border-bottom: 2px solid #5d5dff;
		transition: 0.2s ease;
	}
	.active {
		color: #5d5dff;
		cursor: pointer;

		border-bottom: 2px solid #5d5dff;
		transition: 0.2s ease;
	}

	.hamburger {
		display: none;
	}
	@media (max-width: 57.6rem) {
		display: flex;
		align-items: flex-start;

		i {
			display: flex;
			justify-content: flex-end;
			margin-bottom: 2rem;
		}
		.hamburger {
			display: block;
			position: relative;

			ul {
				display: block;
			}
		}
	}
`;

export const MobileMenuContainer = styled.div`
	width: 100%;
	padding: 4rem;
	background: #1d1f22;

	ul {
		display: inline-block;
		width: 100%;
	}
`;
