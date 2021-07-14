import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';
import {
  JoinSuccessContainer,
  Inner,
  Row,
  KeyContainer,
  CopiedText,
} from './styled';
import { SubmitButton } from '../styled';

// eslint-disable-next-line react/display-name
const JoinSuccess = React.forwardRef(
  ({ hive, memberKeysBase64, baseComponentHeight, setStage }, ref) => {
    const [didCopy, setDidCopy] = React.useState(false);

    React.useEffect(() => {
      if (didCopy) setTimeout(() => setDidCopy(false), 3000);
    }, [didCopy]);

    return (
      <JoinSuccessContainer ref={ref} baseComponentHeight={baseComponentHeight}>
        <Inner>
          <h2>You have succesfully joined {hive?.name}!</h2>
          <p>
            Please store the key below in a very safe place. This key is unique
            to you, acts as both a username and password, and allows you to
            digitally sign, encrypt, and access stories and media. You will need
            to this key in order to login on other devices.
          </p>
          <Row>
            <KeyContainer>{memberKeysBase64}</KeyContainer>
            <CopyToClipboard
              text={memberKeysBase64}
              onCopy={() => setDidCopy(true)}
            >
              <div
                style={{
                  margin: 'auto',
                  cursor: 'pointer',
                }}
              >
                <FiCopy size={40} />
                <p>Copy</p>
              </div>
            </CopyToClipboard>
            <CopiedText isShowing={didCopy}>Copied</CopiedText>
          </Row>
          <SubmitButton onClick={() => setStage(0)}>Continue</SubmitButton>
        </Inner>
      </JoinSuccessContainer>
    );
  }
);

JoinSuccess.propTypes = {
  hive: PropTypes.object,
  memberKeysBase64: PropTypes.string,
  baseComponentHeight: PropTypes.number,
  setStage: PropTypes.func,
};

export default JoinSuccess;
