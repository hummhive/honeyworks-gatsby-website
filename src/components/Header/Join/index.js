import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { HummContext } from '@hummhive/gatsby-plugin-hummhive-react-web-data';
import { useLocation } from '@reach/router';
import { JoinContainer, Inner, InviteTokenText } from './styled';
import { TextInput, SubmitButton, Error } from '../styled';
import Loader from '../../Loader';

// eslint-disable-next-line react/display-name
const Join = React.forwardRef(
  ({ joinHive, baseComponentHeight, setStage }, ref) => {
    const { state } = React.useContext(HummContext);
    const location = useLocation();
    const [isLoading, setIsLoading] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [inviteToken, setInviteToken] = React.useState(null);
    const [error, setError] = React.useState(null);

    // handle query param invite token
    React.useEffect(() => {
      const search = new URLSearchParams(location.search);
      const token = search.get('invite-token');

      if (token) {
        setInviteToken(token);
        navigate(location.pathname, { replace: true });
      }
    }, [location.search]);

    const handleJoin = async (e) => {
      try {
        e.preventDefault();

        const validEmail =
          email.match(
            // eslint-disable-next-line no-control-regex
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          ) !== null;

        if (email.length < 2 || !validEmail) {
          setError('Please enter a valid email.');
          return;
        }

        if (!username || username.length < 2) {
          setError('Username needs to be at least 2 character.');
          return;
        }

        setIsLoading(true);
        await joinHive({
          hiveAdminPublicKeys: state.hiveConfig.adminPublicKeys.map(
            (k) => k.encryption
          ),
          username,
          email,
          inviteToken,
        });

        setIsLoading(false);
        setStage(5);
        setUsername('');
        setEmail('');
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    return (
      <JoinContainer
        ref={ref}
        baseComponentHeight={baseComponentHeight}
        className="primaryGradientBg"
      >
        <Inner>
          {error && <Error>Error: {error}</Error>}
          <form onSubmit={handleJoin}>
            {inviteToken && (
              <>
                <InviteTokenText>
                  <h4>Invite Token:</h4>
                  <p>{inviteToken}</p>
                </InviteTokenText>
              </>
            )}
            <TextInput
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <SubmitButton disabled={isLoading}>
              <Loader isLoading={isLoading} size={32} />
              {!isLoading && 'Join'}
            </SubmitButton>
          </form>
        </Inner>
      </JoinContainer>
    );
  }
);

Join.propTypes = {
  hive: PropTypes.object,
  joinHive: PropTypes.func,
  baseComponentHeight: PropTypes.number,
  setStage: PropTypes.func,
};

export default Join;
