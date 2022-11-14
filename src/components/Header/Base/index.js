import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import {
  BaseContainer,
  TitleContainer,
  ButtonsContainer,
  Button,
} from './styled';
import { navigate } from 'gatsby';

// eslint-disable-next-line react/display-name
const Base = React.forwardRef(({ logo, location, isLoggedIn, activeStage, setStage, hive, config}, ref) => {
  const handleHome = () => {
    setStage(0);
    navigate('/');
  }
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <BaseContainer className="container">
        <TitleContainer onClick={() => handleHome()}>
          {config?.logoImage ? (
          <GatsbyImage image={logo.childImageSharp.gatsbyImageData} />
          ) : (
            hive?.name
          )}
        </TitleContainer>
        <ButtonsContainer>
          {location.hostname === "hive.humm.earth" && (
          <a href="https://humm.earth">
          <Button>
            <span>Return to Home</span>
          </Button>
        </a>
        )}
          {isLoggedIn ? (
            <Button className="primaryBg" onClick={() => setStage(activeStage === 4 ? 0 : 4)}>
              <span>{activeStage === 4 ? 'Close' : 'My Account'}</span>
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
            <Button onClick={() => setStage(activeStage === 3 ? 0 : 3)} >
            <span>  {activeStage === 3 ? 'Close' : 'Sign In'}</span>
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
  logo: PropTypes.object,
  location: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  activeStage: PropTypes.number,
  setStage: PropTypes.func,
};

export default Base;
