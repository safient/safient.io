import styled from 'styled-components';

export const FaqSection = styled.section`
  margin: 2rem auto;
  max-width: 90rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const FaqContainer = styled.div`
  transition: box-shadow 0.3s;
  border-radius: 0.5rem;
  gap: 2rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 12px #5d5dff;
  }
`;

export const QuestionsContainer = styled.div`
  background: #25282c;
  padding: 2rem 4rem;
  font-weight: 500;
  color: #d9e3ea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(isActive) => (isActive ? 'none' : '1px solid #9ba9b4')};
  @media (max-width: 57.6rem) {
    padding: 2rem 2rem;
  }
`;

export const AnswersContainer = styled.div`
  background: #25282c;
  padding: 0rem 4rem 2rem 4rem;
  @media (max-width: 57.6rem) {
    padding: 0rem 2rem 2rem 2rem;
  }
`;

export const ItemsContainer = styled.div`
  margin: 6rem 0 8rem 0;

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }
  @media (max-width: 57.6rem) {
    padding: 0 1rem;

    h2 {
      text-align: center;
      line-height: 1.4;
    }
  }
`;
