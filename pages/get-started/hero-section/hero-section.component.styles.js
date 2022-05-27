import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  height: 70vh;
`;
export const CtaContainer = styled.div`
  flex: 1;
  h3 {
    font-size: 32px;
    line-height: 1.4;
    color: #fff;
  }
  p {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 31px;
    margin-top: 2rem;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  align-self: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const StyledForm = styled.form`
  background: #25282c;
  padding: 4rem;
  border-radius: 0.5rem;

  h4 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
  }
  input {
    height: 4.4rem;
    width: 400px;
    padding: 1.1rem;
    margin-bottom: 2rem;
    border-radius: 0.4rem;
    font-size: 1.6rem;
  }

  label {
    font-size: 1.8rem;
    font-weight: 500;
    color: #9ba9b4;
    margin-bottom: 0.4rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  button {
    width: 100%;
    background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
    background: linear-gradient(90deg, transparent, transparent),
      linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
    color: #fff;
    font: inherit;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 3.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(89.58deg, #44bcf0 -19.85%, #818cf8 54.07%, #a099ff 120.75%);
    }
  }
`;
