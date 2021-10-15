import React from 'react';
import PropTypes from 'prop-types';
import KeyContainer from '../KeyContainer';
import { JoinSuccessContainer, Inner } from './styled';
import { SubmitButton } from '../styled';

// eslint-disable-next-line react/display-name
const JoinSuccess = React.forwardRef(
  ({ hive, secretKeyBase64, baseComponentHeight, setStage }, ref) => {
    return (
      <JoinSuccessContainer ref={ref} baseComponentHeight={baseComponentHeight} className="primaryGradientBg">
        <Inner>
          <h2>You have succesfully joined {hive?.name}!</h2>
          <p>
            Please store the key below in a very safe place. This key is unique
            to you, acts as both a username and password, and allows you to
            digitally sign, encrypt, and access stories and media. You will need
            to this key in order to login on other devices.
          </p>
          <KeyContainer keyString={secretKeyBase64} isHiddenByDefault />
          <div style={{ height: 32 }} />
          <SubmitButton onClick={() => setStage(0)}>Continue</SubmitButton>
        </Inner>
      </JoinSuccessContainer>
    );
  }
);

JoinSuccess.propTypes = {
  hive: PropTypes.object,
  secretKeyBase64: PropTypes.string,
  baseComponentHeight: PropTypes.number,
  setStage: PropTypes.func,
};

export default JoinSuccess;
