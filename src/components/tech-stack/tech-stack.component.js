import {
  TechContainer,
  LogoContainer,
  DescriptionContainer,
  TeckStackContainer,
  StyledDiv,
} from './tech-stack.component.styles';

export const TechStack = () => {
  return (
    <TeckStackContainer>
      <h2>Web3 Stacks that make this happen</h2>

      <TechContainer>
        <LogoContainer>
          <img src='./images/tech-icons.svg' alt='' />
        </LogoContainer>
        <DescriptionContainer>
          <StyledDiv>
            <h3>Filecoin + Textile Buckets</h3>
            <p>Ensures that the safes are avaliable all the time.</p>
          </StyledDiv>
          <StyledDiv>
            <h3>Textile ThreadDB</h3>
            <p>Helps to store all the public metadata on a p2p database.</p>
          </StyledDiv>
          <StyledDiv>
            <h3>Ceramic IDX</h3>
            <p>Acts as an identity solution for each Safient user.</p>
          </StyledDiv>
          <StyledDiv>
            <h3>Magic Link</h3>
            <p>
              Allows Safient users to authenticate to the application without a traditional username/ password or
              without having to install any Crypto wallets.
            </p>
          </StyledDiv>
        </DescriptionContainer>
      </TechContainer>
    </TeckStackContainer>
  );
};
