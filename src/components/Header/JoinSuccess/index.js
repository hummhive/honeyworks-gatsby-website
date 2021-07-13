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
const JoinSuccess = React.forwardRef(({ memberKeysBase64, setStage }, ref) => {
  const [didCopy, setDidCopy] = React.useState(false);

  React.useEffect(() => {
    if (didCopy) setTimeout(() => setDidCopy(false), 3000);
  }, [didCopy]);

  return (
    <JoinSuccessContainer ref={ref}>
      <Inner>
        <p>
          You have succesfully signed up, please store the key below in a safe
          place like a password manager. This key acts as both a username and
          password and allows you to digitally sign and encrypt data. You will
          need to this key in order to login on other devices.
        </p>
        <p>
          This site is powered by HummHive which is an agent centric publisher
          that might have different functionality from what you expect. If you
          have requested access to a Group, you will not have access to that
          Group&apos;s content until the Hive Creator re-encrypts thier content
          for you. Why? (add link to FAQ)
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
            </div>
          </CopyToClipboard>
          <CopiedText isShowing={didCopy}>Copied</CopiedText>
        </Row>
        <SubmitButton onClick={() => setStage(0)}>Continue</SubmitButton>
      </Inner>
    </JoinSuccessContainer>
  );
});

JoinSuccess.propTypes = {
  memberKeysBase64: PropTypes.string,
  setStage: PropTypes.func,
};

export default JoinSuccess;
