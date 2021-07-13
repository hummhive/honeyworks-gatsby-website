import React from 'react';
import PropTypes from 'prop-types';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import CloseButton from '../CloseButton';
import { FiLock, FiUnlock } from 'react-icons/fi';
import { AccountContainer, Inner } from './styled';

// eslint-disable-next-line react/display-name
const Account = React.forwardRef(({ activeStage, setStage }, ref) => {
  const { state, actions } = React.useContext(HummContext);
  const { memberKeysBase64 } = state;
  const [showKey, setShowKey] = React.useState(false);
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
    <AccountContainer ref={ref}>
      <Inner>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <h5 className="pb-4 mb-0">My Account</h5>
        <div className="row w-100 pt-3 pb-3 media">
          <div className="col-6">
            <p className="media-body mb-0 small lh-125">
              <strong className="d-block">My Key</strong>
              Make sure to store your key in a safe place.
            </p>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end my-auto">
            <small onClick={() => setShowKey(true)}>
              {showKey ? (
                <div className="d-flex align-items-center">
                  <FiUnlock
                    style={{
                      fontSize: '15px',
                      marginRight: '9px',
                      width: '30px',
                    }}
                  />{' '}
                  <span className="text-break">{memberKeysBase64}</span>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <FiLock
                    style={{
                      fontSize: '15px',
                      width: '30px',
                    }}
                  />{' '}
                  <span>Click here to unlock your keys</span>
                </div>
              )}
            </small>
          </div>
        </div>
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
        <div className="row w-100 pt-3 pb-3 media">
          <div className="col-6">
            <p className="media-body mb-0 small lh-125">
              <strong className="d-block text-danger">
                Destroy Session in this Browser
              </strong>
              You will need to use your key in order to login once you destroy
              your session in this browser. <br />
            </p>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end text-break my-auto">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              End Session
            </button>
          </div>
        </div>
        <CloseButton
          activeStage={activeStage}
          showingStage={4}
          delay={1000}
          onClick={() => setStage(0)}
        />
      </Inner>
    </AccountContainer>
  );
});

Account.propTypes = {
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Account;
