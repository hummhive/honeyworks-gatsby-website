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
const Base = React.forwardRef(({ isLoggedIn, activeStage, setStage, hive, config, location}, ref) => {
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <BaseContainer className="container">
        <TitleContainer onClick={() => navigate('/')}>
          {config?.logoImage ? (
          <img src={`/logo.${config.logoImage.split('.').pop()}`} height={40} />
          ) : (
            hive?.name
          )}
        </TitleContainer>
        <ButtonsContainer>
          <Button onClick={() => navigate('/')} className={location.pathname === '/' && 'primaryColor'}>
            <span>Home</span>
          </Button>
          <Button onClick={() => setStage(activeStage === 3 ? 0 : 3)} >
          <span>  {activeStage === 3 ? 'Close' : 'Sign In'}</span>
          </Button>
          {isLoggedIn ? (
            <Button onClick={() => setStage(activeStage === 4 ? 0 : 4)}>
              <span>{activeStage === 4 ? 'Close' : 'Account'}</span>
            </Button>
          ) : (
            <>
              <Button className="primaryBg"
                onClick={() =>
                  setStage(activeStage === 1 || activeStage === 2 ? 0 : 1)
                }
              >
                <span>{activeStage === 1 || activeStage === 2 ? 'Close' : 'Join'}</span>
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
  location: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Base;
