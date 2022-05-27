import { Button } from '../../../src/components/button/button';
import {
  HeroContainer,
  FormContainer,
  CtaContainer,
  Form,
  StyledDiv,
  StyledForm,
  FormGroup,
  SubmitContainer,
} from './hero-section.component.styles';

export const Hero = () => {
  return (
    <HeroContainer>
      <CtaContainer>
        <h3>A Non-Custodial Recoverable and Inheritable wallet application built on Safient Protocol</h3>
        <p>
          We are working on it. In the meantime, you can subscribe here to get early access and join us on Twitter and
          Discord for updates.
        </p>
      </CtaContainer>
      <FormContainer>
        <StyledDiv>
          <StyledForm action='' className=''>
            <h4>Sign up for updates</h4>
            <FormGroup>
              <label htmlFor='name'>First Name</label>
              <input type='text' placeholder='John Doe' />
            </FormGroup>
            <FormGroup>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='johndoe@example.org' />
            </FormGroup>
            <SubmitContainer>
              <button>Notify Me</button>
            </SubmitContainer>
          </StyledForm>
        </StyledDiv>
      </FormContainer>
    </HeroContainer>
  );
};
