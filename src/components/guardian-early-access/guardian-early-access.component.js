import { useState } from 'react';
import { Span } from '../span/span.component';
import {
  HeroContainer,
  FormContainer,
  CtaContainer,
  Form,
  StyledDiv,
  StyledForm,
  FormGroup,
  SubmitContainer,
} from './guardian-early-access.component.styles';

const GuardianEarlyAccess = () => {
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
        <h3>
          Be a part of <Span>Safient Network </Span> 🤝
        </h3>
        <p>
          We are onboarding early guardians to our testnet version of the <Span>Safient protocol</Span>. If you are
          interested to be part of our network, please submit your info so that we can reach out to you.
        </p>
      </CtaContainer>
      <FormContainer>
        <StyledDiv>
          <StyledForm onSubmit={submitForm} action='https://formspree.io/f/mgerkpko' method='POST'>
            <h4>Become an early Guardian 🛡️</h4>
            {/* start */}

            {status === 'SUCCESS' ? (
              <p className='text-primary-yellow'>Thank you for getting in touch 🙏. We will get back to you soon.</p>
            ) : (
              <>
                <FormGroup>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' id='firstName' name='firstName' placeholder='Safien' />
                </FormGroup>

                <FormGroup>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' id='email' placeholder='safien@safient.io' />
                </FormGroup>

                <SubmitContainer>
                  <button type='submit'>Let&apos;s Go 🚀</button>
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

export default GuardianEarlyAccess;
