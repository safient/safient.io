import { useState } from 'react';
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

const Hero = () => {  
  const [status, setStatus] = useState('');
  function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }
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
          <StyledForm onSubmit={submitForm} action='https://formspree.io/f/mgerkpko' method='POST'>
            <h4>Sign up for updates</h4>
            {/* start */}

            {status === 'SUCCESS' ? (
              <p className='text-primary-yellow'>Thank you for getting in touch 🙏. We will get back to you soon.</p>
            ) : (
              <>
                <FormGroup>
                  <label htmlFor='name'>First Name</label>
                  <input type='text' id='firstName' name='firstName' placeholder='John Doe' />
                </FormGroup>

                <FormGroup>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' id='email' placeholder='johndoe@example.org' />
                </FormGroup>

                <SubmitContainer>
                  <button type='submit'>Notify Me</button>
                </SubmitContainer>

                {status === 'ERROR' && <p className='text-primary-yellow'>Ooops! There was an error.</p>}
              </>
            )}

            {/* end */}
          </StyledForm>
        </StyledDiv>
      </FormContainer>
    </HeroContainer>
  );
};

export default Hero
