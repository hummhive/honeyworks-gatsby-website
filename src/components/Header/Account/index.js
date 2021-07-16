import React from 'react';
import PropTypes from 'prop-types';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import KeyContainer from '../KeyContainer';
import { AccountContainer, Inner, Row, Button } from './styled';
import { Error } from '../styled';

// eslint-disable-next-line react/display-name
const Account = React.forwardRef(({ baseComponentHeight, setStage }, ref) => {
  const { state, actions } = React.useContext(HummContext);
  const { keySetBase64, secretKeyBase64 } = state;
  const [error, setError] = React.useState(false);

  const handleLogout = async () => {
    try {
      await actions.logout();
      setStage(0);
    } catch (err) {
      setError(err.message || JSON.stringify(err));
    }
  };

  return (
    <AccountContainer ref={ref} baseComponentHeight={baseComponentHeight}>
      <Inner>
        {error && <Error>Error: {error}</Error>}

        <h2>My Account</h2>
        <h3>My Keys</h3>

        <label>Signing Public Key</label>
        <KeyContainer keyString={keySetBase64.signing.public.toString()} />
        <label>Encryption Public Key</label>
        <KeyContainer keyString={keySetBase64.encryption.public.toString()} />
        <label>
          Secret Key{' '}
          <span style={{ fontWeight: 400 }}>
            (Make sure to store this in a safe place)
          </span>
        </label>
        <KeyContainer keyString={secretKeyBase64} isHiddenByDefault />

        <div style={{ height: 64 }} />

        <h3>Actions</h3>

        <Row>
          <div style={{ flex: '1 1 auto' }}>
            <label>End Session In This Browser</label>
            <p>
              You will need to use your key in order to login once you destroy
              your session in this browser.
            </p>
          </div>
          <div style={{ flex: '1 0 auto' }}>
            <Button onClick={handleLogout}>End Session</Button>
          </div>
        </Row>

        {/* {getBillingPortal() && (
            <div className="row w-100 pt-3 pb-3 media text-muted">
              <div className="col-6">
                <p className="media-body mb-0 small lh-125">
                  <strong className="d-block text-gray-dark">
                    Manage Subscription
                  </strong>
                  Make sure to store your keys in a safe place.
                </p>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end text-break my-auto">
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={() => checkBillingPortal(hive, true)}
                >
                  Manage my Subscription
                </button>
              </div>
            </div>
          )} */}
      </Inner>
    </AccountContainer>
  );
});

Account.propTypes = {
  baseComponentHeight: PropTypes.number,
  setStage: PropTypes.func,
};

export default Account;
