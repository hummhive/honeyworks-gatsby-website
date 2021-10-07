import React from 'react';
import PropTypes from 'prop-types';
import {
  BaseContainer,
  TitleContainer,
  ButtonsContainer,
  Button,
} from './styled';
import { navigate } from 'gatsby';

// eslint-disable-next-line react/display-name
const Base = React.forwardRef(({ isLoggedIn, activeStage, setStage, hive, config }, ref) => {

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <BaseContainer className="container">
        <TitleContainer onClick={() => navigate('/')}>
          {config.themeSettings.logoImage ? (
          <img src={`logo.${config.themeSettings.logoImage.split('.').pop()}`} height={40} />
          ) : (
            hive?.name
          )}
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
              <Button className="primaryBg"
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
  config: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Base;
