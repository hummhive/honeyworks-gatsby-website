import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';
import { Container, Key, Overlay, CopiedText } from './styled';

const KeyContainer = ({ keyString, isHiddenByDefault }) => {
  const [didCopy, setDidCopy] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const isHidden = isHiddenByDefault && !show;

  React.useEffect(() => {
    if (didCopy) setTimeout(() => setDidCopy(false), 1000);
  }, [didCopy]);

  return (
    <Container>
      <Key>
        {isHidden ? 'HIDDEN' : keyString}
        {isHiddenByDefault && isHidden && (
          <Overlay onClick={() => setShow(true)}>Click to reveal</Overlay>
        )}
      </Key>
      <CopyToClipboard text={keyString} onCopy={() => setDidCopy(true)}>
        <div
          style={{
            margin: 'auto',
            cursor: 'pointer',
          }}
        >
          <FiCopy size={28} />
          <p>Copy</p>
        </div>
      </CopyToClipboard>
      <CopiedText isShowing={didCopy}>Copied</CopiedText>
    </Container>
  );
};

KeyContainer.propTypes = {
  keyString: PropTypes.string,
  isHiddenByDefault: PropTypes.bool,
};

export default KeyContainer;
