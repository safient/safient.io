import styled from 'styled-components';

export const ProductsContainer = styled.div`
  margin: 10rem 0;

  h2 {
    text-align: center;
    font-size: 3.6rem;
  }
  .sub-heading {
    text-align: center;
    margin-bottom: 6rem;
    font-size: 2rem;
    font-weight: 500;
  }
  @media (max-width: 57.6rem) {
    margin-top: 12rem;
    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export const TryNowButton = styled.button`
  background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%) !important;
  color: #fff;
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledDiv = styled.section`
  position: relative;
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  color: #fff;
  margin-top: 4rem;
`;
export const BlobContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  @media (max-width: 57.6rem) {
    display: none;
  }
`;

export const Product = styled.div`
  padding: ${({ inverted }) => (inverted ? '4rem 4rem 4rem 4rem ' : '0 4rem')};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  .description {
    align-self: center;
    margin-top: 4rem;
    width: 90%;
    flex: 1;
  }

  .product-heading {
    font-size: 3rem;
    line-height: 1.4;
  }
  .product-subHeading {
    line-height: 1.6;
    font-size: 2rem;
    font-weight: 500;
    margin: 2rem auto;
  }

  .mobile {
    width: 249px;
    display: inline-block;
    margin-right: 150px;
  }
  img {
    width: 50%;
  }
  @media (max-width: 57.6rem) {
    img {
      width: 100%;
    }

    .description {
      text-align: center;
    }

    .product-heading {
      text-align: center;
      font-size: 2.4rem;
    }
    .product-subHeading {
      text-align: center;
      font-size: 1.8rem;
    }

    .mobile {
      margin-left: 2rem;
    }
  }
`;
