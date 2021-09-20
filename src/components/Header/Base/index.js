import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'react-use';
import { HummContext } from 'gatsby-plugin-hummhive-react-web-data';
import Logo from '../../../icons/logo';
import {
  BaseContainer,
  TitleContainer,
  ButtonsContainer,
  Button,
} from './styled';
import { navigate } from 'gatsby';

// eslint-disable-next-line react/display-name
const Base = React.forwardRef(({ isLoggedIn, activeStage, setStage }, ref) => {
  const windowSize = useWindowSize();
  const logoSize =
    windowSize.width < 480 ? 32 : windowSize.width < 720 ? 38 : 42;

    const { state, actions } = React.useContext(HummContext);

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <BaseContainer className="container">
        <TitleContainer onClick={() => navigate('/')}>
          Honeyworks
        </TitleContainer>
        <ButtonsContainer>
          <Button onClick={() => navigate('/')}>
            Home
          </Button>
          <Button onClick={() => setStage(activeStage === 3 ? 0 : 3)}>
            {activeStage === 3 ? 'Close' : 'Sign In'}
          </Button>
          {isLoggedIn ? (
            <Button onClick={() => setStage(activeStage === 4 ? 0 : 4)}>
              {activeStage === 4 ? 'Close' : 'Account'}
            </Button>
          ) : (
            <>
              <Button
                color={state.staticCoreData.themeSettings.colors.primary}
                onClick={() =>
                  setStage(activeStage === 1 || activeStage === 2 ? 0 : 1)
                }
              >
                {activeStage === 1 || activeStage === 2 ? 'Close' : 'Join'}
              </Button>
            </>
          )}
        </ButtonsContainer>
      </BaseContainer>
    </div>
  );
});

Base.propTypes = {
  hive: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Base;
