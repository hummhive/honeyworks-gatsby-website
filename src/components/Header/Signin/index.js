import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';
import { SigninContainer, Inner } from './styled';
import { TextInput, SubmitButton, Error } from '../styled';

// eslint-disable-next-line react/display-name
const Signin = React.forwardRef(({ activeStage, signin, setStage }, ref) => {
  const [error, setError] = React.useState(null);
  const [b64Key, setb64Key] = React.useState('');

  const handleSignin = async (e) => {
    try {
      e.preventDefault();
      await signin(b64Key);
      setb64Key('');
      setStage(0);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SigninContainer ref={ref}>
      <Inner>
        {error && <Error>Error: {error}</Error>}
        <form onSubmit={handleSignin}>
          <TextInput
            type="password"
            placeholder="Enter Your Private Key"
            value={b64Key}
            onChange={(e) => setb64Key(e.target.value)}
          />
          <SubmitButton>Sign In</SubmitButton>
          <CloseButton
            activeStage={activeStage}
            showingStage={3}
            delay={1000}
            onClick={() => setStage(0)}
          />
        </form>
      </Inner>
    </SigninContainer>
  );
});

Signin.propTypes = {
  activeStage: PropTypes.number,
  signin: PropTypes.func,
  setStage: PropTypes.func,
};

export default Signin;
