import styled from 'styled-components';

export const JoinContainer = styled.section`
  position: relative;
  background: #5d5dff;
  color: #fff;
`;
export const BlobContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const NewsLetterContainer = styled.div`
  padding: 64px 70px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 2.4rem;
  }

  p {
    font-size: 2rem;
  }
  input {
    /* height: 5rem; */
    min-width: 30.4rem;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;
    font-size: 1.8rem;
    background: #4b4acf;
    color: #fff;
    &::placeholder {
      color: #9ba9b4;
      opacity: 1;
      font-weight: 200;
    }
  }

  button {
    padding: 1.5rem 2.5rem;
    border: none;
    border-radius: 0.5rem;
    margin-left: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: #4b4acf;
    cursor: pointer;
    z-index: 10;
  }
`;

export const JoinCommunity = () => {
  return (
    <JoinContainer>
      <BlobContainer>
        <img src='/images/blob-2.svg' alt='blob' />
      </BlobContainer>
      <NewsLetterContainer>
        <div>
          <h3>Stay in the loop</h3>
          <p>Join our newletter to get top news before anyone else</p>
        </div>
        <div>
          <input type='email' placeholder='Enter your email' />
          <button>Subscribe</button>
        </div>
      </NewsLetterContainer>
    </JoinContainer>
  );
};
