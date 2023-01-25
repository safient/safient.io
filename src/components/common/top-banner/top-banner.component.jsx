import styled from "styled-components";

export const TopBannerContainer = styled.div`
  height: 60px;

  background-color: #181628;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  p,
  span {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const TopBanner = () => {
  return (
    <TopBannerContainer>
      <p>
        Start gifting crypto by creating a voucher now 🚀 -{" "}
        <span onClick={() => window.open("https://voucher.safient.io/")}>
          Try Vouchers
        </span>{" "}
      </p>
    </TopBannerContainer>
  );
};
