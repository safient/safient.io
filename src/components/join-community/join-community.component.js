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
  padding: 6.4rem 7rem;

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

  @media (max-width: 57.6rem) {
    padding: 2rem 1.1rem;
    button {
      width: 100%;
      margin: 2rem 0 2rem 0;
    }

    input {
      width: 100%;
      margin: 2rem 0 2rem 0;
    }

    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 3rem;
    }
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
          <p>Join our Discord server to stay on top of our developments</p>
        </div>
        <button onClick={() => window.open('https://discord.safient.io/')}>Join Now</button>
      </NewsLetterContainer>
    </JoinContainer>
  );
};
