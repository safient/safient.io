import {
  BlobContainer,
  Product,
  ProductsContainer,
  StyledDiv,
  TryNowButton,
} from "./product-section.component.styles";
import { useRouter } from "next/router";
export const ProductSection = () => {
  const router = useRouter();
  return (
    <ProductsContainer>
      <h2>Our Solutions</h2>
      <p className="sub-heading">
        We are here to solve the onboarding and inheritance problems of
        self-custody 🤗. Here are the solutions that are built on top of Safient
        Protocol to make that happen.{" "}
      </p>
      <StyledDiv>
        <BlobContainer>
          <img src="/images/blob-2.svg" alt="blob" />
        </BlobContainer>
        <Product>
          <div className="description">
            <h3 className="product-heading">Non-custodial claimable Wallets</h3>
            <p className="product-subHeading">
              A crypto wallet solution for easy self recovery and Inheritance.
            </p>

            <TryNowButton
              onClick={() => window.open("https://wallet.safient.io/gm")}
            >
              Try Now
            </TryNowButton>
          </div>
          <img src={`/images/wallet-mob.png`} alt="wallet" className="mobile" />
        </Product>
      </StyledDiv>
      <StyledDiv>
        <BlobContainer>
          <img src="/images/blob-2.svg" alt="blob" />
        </BlobContainer>

        <Product inverted>
          <img src={`/images/safes.png`} alt="wallet" />
          <div className="description">
            <h3 className="product-heading">
              Create your Contract Account and unleashed the true power of
              Account Abstraction
            </h3>
            <p className="product-subHeading">
              Forget Seedphrases. Recover your wallet with your designated
              Recovery Contacts. Designed to be future censorship resistant and
              free from third party control with ERC-4337
            </p>

            <TryNowButton onClick={() => router.push("/safes")}>
              Know More
            </TryNowButton>
          </div>
        </Product>
      </StyledDiv>
    </ProductsContainer>
  );
};
